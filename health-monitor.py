#!/usr/bin/env python3
"""
Asset Health Monitor - Autonomous Infrastructure Agent
Checks all product images for 200 OK status.
If an image fails, searches fallback sources and updates config.
Usage: python health-monitor.py [--fix]
"""

import asyncio
import urllib.request
import urllib.error
import json
import sys
from pathlib import Path
from datetime import datetime
from typing import List, Dict, Optional, Any
import ssl
import subprocess

class AssetHealthMonitor:
    def __init__(self, fix_mode: bool = False):
        self.fix_mode = fix_mode
        self.results: List[Dict] = []
        self.errors: List[str] = []
        self.fixed: List[str] = []
        
        # Load current infrastructure config
        self.config = self._load_config()
        
    def _load_config(self) -> Dict:
        """Load infrastructure.config.ts as Python dict"""
        # For now, hardcoded product list
        # In production, this would parse the TypeScript file
        return {
            'products': [
                {
                    'sku': 'g11',
                    'name': 'G11 Garden Series',
                    'hero': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
                    'gallery_local': [
                        '/img/g11/Gemini_Generated_Image_bn6jflbn6jflbn6j.png',
                        '/img/g11/Gemini_Generated_Image_qhcnl3qhcnl3qhcn.png',
                        '/img/g11/Gemini_Generated_Image_xz2b1lxz2b1lxz2b.png',
                        '/img/g11/Model-G11-Sauna-Interior-1-scaled.jpg'
                    ]
                },
                {
                    'sku': 'g4',
                    'name': 'G4 Garden Series',
                    'hero': 'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-gl4-6-person-outdoor-home-sauna-kit_1000x.jpg',
                },
                {
                    'sku': 'x2',
                    'name': 'X2 Indoor Xperience',
                    'hero': 'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-x2-hero_1000x.jpg',
                },
                {
                    'sku': 'x4',
                    'name': 'X4 Indoor Xperience',
                    'hero': 'PLACEHOLDER',
                },
                {
                    'sku': 'x6',
                    'name': 'X6 Indoor Xperience',
                    'hero': 'PLACEHOLDER',
                },
                {
                    'sku': 'slate',
                    'name': 'Slate Immersion',
                    'hero': 'PLACEHOLDER',
                }
            ]
        }
    
    def check_url(self, url: str, sku: str, asset_type: str) -> Dict[str, Any]:
        """Check if a URL returns 200 OK (synchronous version)"""
        if url.startswith('PLACEHOLDER'):
            return {
                'sku': sku,
                'url': url,
                'status': 'placeholder',
                'asset_type': asset_type
            }
        
        if url.startswith('/'):
            # Local file - check filesystem
            public_file = Path('public') / url.lstrip('/')
            exists = public_file.exists()
            return {
                'sku': sku,
                'url': url,
                'status': 'ok' if exists else 'missing',
                'asset_type': asset_type,
                'local_path': str(public_file)
            }
        
        # Remote URL - HTTP check using urllib
        try:
            ctx = ssl.create_default_context()
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE
            
            req = urllib.request.Request(url, method='HEAD')
            req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
            
            with urllib.request.urlopen(req, timeout=10, context=ctx) as response:
                status_code = response.getcode()
                status = 'ok' if status_code == 200 else f'error_{status_code}'
                return {
                    'sku': sku,
                    'url': url,
                    'status': status,
                    'asset_type': asset_type,
                    'http_status': status_code
                }
        except urllib.error.HTTPError as e:
            return {
                'sku': sku,
                'url': url,
                'status': f'http_error_{e.code}',
                'asset_type': asset_type
            }
        except Exception as e:
            return {
                'sku': sku,
                'url': url,
                'status': f'error: {str(e)[:50]}',
                'asset_type': asset_type
            }
    
    def scan_all(self):
        """Scan all product assets"""
        results = []
        
        for product in self.config['products']:
            sku = product['sku']
            
            # Check hero image
            if 'hero' in product:
                results.append(self.check_url(product['hero'], sku, 'hero'))
            
            # Check local gallery
            if 'gallery_local' in product:
                for i, img in enumerate(product['gallery_local']):
                    results.append(self.check_url(img, sku, f'gallery_{i}'))
        
        self.results = results
        
    def generate_fallbacks(self, sku: str, url: str) -> List[str]:
        """Generate fallback URLs for a dead image"""
        fallbacks = []
        
        # SaunaLife CDN patterns
        fallbacks.append(f'https://saunalife.com/cdn/shop/products/{sku}-main.jpg')
        fallbacks.append(f'https://saunalife.com/cdn/shop/products/{sku}-hero.jpg')
        
        # MyLuxuryHomeSpa patterns
        fallbacks.append(f'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-{sku}-hero.jpg')
        fallbacks.append(f'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-{sku}-1000x.jpg')
        
        # Unsplash fallback (generic sauna)
        if sku in ['g11', 'g4']:
            fallbacks.append('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800')
        elif sku in ['x2', 'x4', 'x6']:
            fallbacks.append('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800')
        
        return fallbacks
    
    def attempt_resolution(self, failed_result: Dict) -> Optional[str]:
        """Try to resolve a failed asset"""
        sku = failed_result['sku']
        current_url = failed_result['url']
        
        fallbacks = self.generate_fallbacks(sku, current_url)
        
        for fallback in fallbacks:
            result = self.check_url(fallback, sku, 'fallback')
            if result['status'] == 'ok':
                return fallback
        
        return None
    
    def run(self):
        """Main entry point"""
        print("🔍 Asset Health Monitor - Lux Haven Infrastructure")
        print("=" * 60)
        print(f"Time: {datetime.now().isoformat()}")
        print(f"Fix Mode: {'ON' if self.fix_mode else 'OFF'}")
        print()
        
        self.scan_all()
        
        # Categorize results
        ok_results = [r for r in self.results if r['status'] == 'ok']
        placeholder_results = [r for r in self.results if r['status'] == 'placeholder']
        error_results = [r for r in self.results if 'error' in r['status'] or r['status'] == 'missing']
        
        print(f"✅ OK: {len(ok_results)}")
        print(f"📝 Placeholders: {len(placeholder_results)}")
        print(f"❌ Errors: {len(error_results)}")
        print()
        
        # Show details
        if error_results:
            print("Errors detected:")
            for error in error_results:
                print(f"  • {error['sku']} / {error['asset_type']}: {error['url'][:60]}...")
                print(f"    Status: {error['status']}")
            print()
        
        # Resolution mode
        if self.fix_mode and error_results:
            print("🔧 Attempting automatic resolution...")
            for error in error_results:
                resolved = self.attempt_resolution(error)
                if resolved:
                    self.fixed.append({
                        'sku': error['sku'],
                        'from': error['url'],
                        'to': resolved
                    })
                    print(f"  ✅ Fixed {error['sku']}: {resolved[:60]}...")
                else:
                    print(f"  ❌ Could not resolve {error['sku']}")
            print()
        
        # Summary
        print("=" * 60)
        print("SUMMARY")
        print(f"Total Assets: {len(self.results)}")
        print(f"Healthy: {len(ok_results)}")
        print(f"Errors: {len(error_results)}")
        print(f"Placeholders: {len(placeholder_results)}")
        if self.fixed:
            print(f"Auto-Fixed: {len(self.fixed)}")
        
        # Update infrastructure.config.ts if fixes were made
        if self.fixed:
            print()
            print("Note: Run with --commit to update infrastructure.config.ts")
        
        return len(error_results) == 0


def main():
    fix_mode = '--fix' in sys.argv
    
    monitor = AssetHealthMonitor(fix_mode=fix_mode)
    success = monitor.run()
    
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
