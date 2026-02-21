#!/usr/bin/env python3
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Try to find working SaunaLife images from various sources
sources = [
    # Shopify CDN patterns
    ('https://cdn.shopify.com/s/files/1/0633/9058/6569/files/saunalife-g11.jpg', 'G11 Shopify'),
    ('https://cdn.shopify.com/s/files/1/0503/3845/2317/files/saunalife-g4.jpg', 'G4 Shopify'),
    ('https://cdn.shopify.com/s/files/1/0503/3845/2317/files/saunalife-x2-front.jpg', 'X2 Shopify'),
    
    # Almost Heaven Saunas (authorized dealer)
    ('https://almostheaven.com/cdn/shop/products/G11-outdoor-sauna.jpg', 'G11 Almost Heaven'),
    ('https://almostheaven.com/cdn/shop/products/G4-cube-sauna.jpg', 'G4 Almost Heaven'),
    
    # Northern Saunas
    ('https://northernsaunas.com/cdn/shop/files/saunalife-g11-barrel.png', 'G11 Northern'),
    ('https://northernsaunas.com/cdn/shop/files/saunalife-x2-indoor.png', 'X2 Northern'),
    
    # The Sauna Place
    ('https://thesaunaplace.com/wp-content/uploads/2023/04/X-Series-Front-View.jpg', 'X2 SaunaPlace'),
    
    # Generic manufacturer CDNs
    ('https://cdn.saunalife.com/products/g11/hero.jpg', 'G11 CDN'),
    ('https://cdn.saunalife.com/products/g11/main.jpg', 'G11 CDN 2'),
]

print("Searching for manufacturer URLs...")
print("="*60)

found = []
for url, name in sources:
    try:
        req = urllib.request.Request(url, method='HEAD')
        req.add_header('User-Agent', 'Mozilla/5.0')
        with urllib.request.urlopen(req, timeout=8, context=ctx) as response:
            if response.status == 200:
                content_type = response.headers.get('Content-Type', '')
                if 'image' in content_type:
                    size = response.headers.get('Content-Length', '0')
                    size_kb = int(size) / 1024 if size else 0
                    print(f'\u2705 {name}: {url[:55]}... ({size_kb:.0f}KB)')
                    found.append((name, url))
    except Exception as e:
        pass

if not found:
    print('\u274c No manufacturer URLs found via direct scan.')
    print('\u2139\ufe0f  Using local G11 images as primary assets.')
    print('\u2139\ufe0f  Recommend: Contact SaunaLife for official media kit.')
else:
    print(f'\nFound {len(found)} working URLs.')
    print('\nRecommended configuration:')
    for name, url in found[:3]:
        print(f'  - {name}')
