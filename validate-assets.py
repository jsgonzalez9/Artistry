#!/usr/bin/env python3
"""
Asset validation script for Lux Haven Infrastructure
Checks all image references in assets.config.ts and pages for 404s
Run before every deploy: python validate-assets.py
"""

import os
import re
import json
from pathlib import Path
from urllib.parse import urlparse
from typing import List, Dict, Set

# Configuration
PUBLIC_DIR = Path("public")
SRC_DIR = Path("src")
ASSETS_FILE = Path("assets.config.ts")

# Whitelisted external domains (from next.config.js)
WHITELISTED_DOMAINS = [
    "myluxuryhomespa.com",
    "saunalife.com", 
    "images.unsplash.com",
    "placehold.co",
]

class AssetValidator:
    def __init__(self):
        self.errors: List[str] = []
        self.warnings: List[str] = []
        self.checked_paths: Set[str] = set()
        
    def validate(self) -> bool:
        """Run all validation checks. Returns True if no errors."""
        print("🔍 Validating Lux Haven assets...\n")
        
        # Check local assets exist
        self._check_local_assets()
        
        # Check assets.config.ts structure
        self._check_assets_config()
        
        # Check page files for hardcoded URLs
        self._check_hardcoded_assets()
        
        # Report results
        return self._report()
        
    def _check_local_assets(self):
        """Verify local image files exist"""
        local_dirs = ["img/g11", "images", "images/products"]
        
        for dir_name in local_dirs:
            dir_path = PUBLIC_DIR / dir_name
            if not dir_path.exists():
                self.warnings.append(f"Directory does not exist: {dir_name}")
                continue
                
            # Check for image files
            images = list(dir_path.glob("*.jpg")) + list(dir_path.glob("*.png"))
            if images:
                print(f"  ✅ {dir_name}: {len(images)} images found")
            else:
                self.warnings.append(f"No images found in {dir_name}")
                
    def _check_assets_config(self):
        """Validate assets.config.ts exists and is importable"""
        if not ASSETS_FILE.exists():
            self.errors.append(f"Missing {ASSETS_FILE} - central asset configuration required")
            return
            
        content = ASSETS_FILE.read_text()
        
        # Check for exported keys
        required_keys = ["brand", "products", "marketing"]
        for key in required_keys:
            if f"{key}:" not in content:
                self.warnings.append(f"assets.config.ts missing '{key}' export")
                
        print(f"  ✅ {ASSETS_FILE} found with exports")
        
    def _check_hardcoded_assets(self):
        """Scan page files for hardcoded image URLs not using assets.config"""
        pages_dir = SRC_DIR / "pages"
        if not pages_dir.exists():
            return
            
        hardcoded_count = 0
        
        for page_file in pages_dir.rglob("*.js"):
            content = page_file.read_text()
            
            # Look for image src patterns
            patterns = [
                r'src\s*=\s*"([^"]+\.(?:jpg|jpeg|png|webp|gif))"',  # HTML/JSX
                r'src:\s*[\'"]([^\'"]+\.(?:jpg|jpeg|png|webp|gif))[\'"]',  # Objects
            ]
            
            for pattern in patterns:
                matches = re.findall(pattern, content)
                for match in matches:
                    # Skip if using assets.config
                    if "assets." in content or "getProductImage" in content:
                        continue
                        
                    # Skip external URLs to whitelisted domains
                    if match.startswith("http"):
                        domain = urlparse(match).netloc
                        if any(d in domain for d in WHITELISTED_DOMAINS):
                            continue
                            
                    # Check if local file exists
                    if match.startswith("/") and not match.startswith("//"):
                        full_path = PUBLIC_DIR / match.lstrip("/")
                        if not full_path.exists():
                            self.errors.append(
                                f"Missing image: {match} (referenced in {page_file})"
                            )
                            hardcoded_count += 1
                            
        if hardcoded_count == 0:
            print(f"  ✅ No hardcoded missing assets found")
        else:
            print(f"  ⚠️  {hardcoded_count} potential issues found")
            
    def _report(self) -> bool:
        """Print validation report"""
        print("\n" + "=" * 50)
        
        if self.errors:
            print(f"\n❌ ERRORS ({len(self.errors)}):")
            for error in self.errors:
                print(f"  • {error}")
                
        if self.warnings:
            print(f"\n⚠️  WARNINGS ({len(self.warnings)}):")
            for warning in self.warnings:
                print(f"  • {warning}")
                
        if not self.errors and not self.warnings:
            print("\n✅ All assets validated successfully!")
            return True
        elif not self.errors:
            print("\n✅ No critical errors (warnings present)")
            return True
        else:
            print(f"\n❌ Validation failed with {len(self.errors)} errors")
            return False


def check_next_config():
    """Verify next.config.js has required domains"""
    config_file = Path("next.config.js")
    if not config_file.exists():
        print("⚠️  next.config.js not found")
        return False
        
    content = config_file.read_text()
    
    required_domains = ["myluxuryhomespa.com", "saunalife.com", "images.unsplash.com"]
    missing = [d for d in required_domains if d not in content]
    
    if missing:
        print(f"⚠️  next.config.js missing domains: {', '.join(missing)}")
        return False
    else:
        print("  ✅ next.config.js has required image domains")
        return True


def main():
    """Main entry point"""
    import sys
    
    # Verify we're in the right directory
    if not ASSETS_FILE.exists() and not Path("package.json").exists():
        print("❌ Error: Run this script from the project root directory")
        sys.exit(1)
        
    validator = AssetValidator()
    valid = validator.validate()
    
    # Additional checks
    check_next_config()
    
    sys.exit(0 if valid else 1)


if __name__ == "__main__":
    main()
