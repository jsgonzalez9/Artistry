/**
 * INFRASTRUCTURE CONFIG - Agentic Brand Orchestration
 * This is the authoritative source of truth for all product data.
 * Any external changes (price, weight, specs) must sync here immediately.
 */

export interface ProductInfrastructure {
  sku: string;
  name: string;
  series: 'Garden' | 'X-Series' | 'Slate';
  tagline: string;
  pricing: {
    current: number;
    currency: 'USD';
    msrp?: number;
    financing?: {
      months: number;
      apr: number;
      monthlyEstimate: number;
    };
  };
  specifications: {
    capacity: {
      persons: number;
      sittingOnly?: boolean;
    };
    dimensions: {
      width: number; // inches
      depth: number;
      height: number;
    };
    weight: {
      lbs: number;
      kg: number;
    };
    material: {
      exterior: string;
      interior: string;
      insulation?: string;
    };
    electrical: {
      voltage: '120V' | '240V';
      amps: number;
      heater?: {
        model: string;
        kw: number;
      };
    };
  };
  metadata: {
    steamDensity: 'high' | 'medium' | 'low' | 'infrared'; // For mood/ambient rendering
    lightingMood: 'warm-golden' | 'cool-white' | 'full-spectrum';
    climateTriggers: {
      idealTemp: number; // °F ambient for best experience
      maxSummerTemp: number; // °F
      minWinterTemp: number; // °F
    };
    installation: {
      type: 'indoor' | 'outdoor' | 'hybrid';
      foundation: 'concrete' | 'gravel' | 'deck' | 'none';
      assemblyHours: number;
    };
  };
  assets: {
    hero: string;
    gallery: string[];
    ugc?: string[]; // User generated content / Higgsfield renders
    video?: string;
    // Antigravity mood properties
    aesthetic: {
      filters: {
        saturate: number; // 0-200%
        contrast: number; // 0-200%
        brightness: number; // 0-200%
        sepia: number; // 0-100%
        exposure?: number; // -1 to 1
        warmth?: number; // 0-100
      };
      glassmorphism: {
        enabled: boolean;
        opacity: number; // 0-1
        blur: number; // px
        borderOpacity: number; // 0-1
      };
    };
  };
  status: {
    inventory: 'in-stock' | 'pre-order' | 'backorder';
    lastVerified: string; // ISO date
    sourceURL: string; // saunalife.com or myluxuryhomespa.com
    reliability?: {
      status: string;
      lastAudit: string;
      origin?: string;
    };
  };
}

export const infrastructure: Record<string, ProductInfrastructure> = {
  g11: {
    sku: 'g11',
    name: 'G11 Garden Series',
    series: 'Garden',
    tagline: 'The 8-Person Sanctuary. Nordic barrel architecture in Thermo-Spruce.',
    pricing: {
      current: 14990,
      currency: 'USD',
      msrp: 15600,
      financing: {
        months: 36,
        apr: 9.99,
        monthlyEstimate: 481
      }
    },
    specifications: {
      capacity: { persons: 8 },
      dimensions: {
        width: 85, // 7'1"
        depth: 85,
        height: 113 // 9'5"
      },
      weight: {
        lbs: 3196,
        kg: 1450
      },
      material: {
        exterior: 'Nordic Thermo-Spruce',
        interior: 'Thermo-Aspen',
        insulation: 'Natural wood thermal mass'
      },
      electrical: {
        voltage: '240V',
        amps: 40,
        heater: {
          model: 'Harvia Cilindro 9kW',
          kw: 9
        }
      }
    },
    metadata: {
      steamDensity: 'high',
      lightingMood: 'warm-golden',
      climateTriggers: {
        idealTemp: 45,
        maxSummerTemp: 95,
        minWinterTemp: 0
      },
      installation: {
        type: 'outdoor',
        foundation: 'concrete',
        assemblyHours: 6
      }
    },
    assets: {
      hero: 'https://nordicasauna.com/cdn/shop/files/G11-backyard-sauna-suite-photo_2048x.jpg?v=1734450780',
      gallery: [
        'https://nordicasauna.com/cdn/shop/files/G11-backyard-sauna-suite-photo_2048x.jpg?v=1734450780',
        'https://nordicasauna.com/cdn/shop/files/G11-sauna-suite-photo-2-500x500_2048x.jpg?v=1734450782',
        'https://nordicasauna.com/cdn/shop/files/SaunaLife-Outdoor-Sauna-Kit-G11-500x500-2_2048x.jpg?v=1761156141',
        'https://nordicasauna.com/cdn/shop/files/saunalife-g11-sauna-suite-interior-3-500x500_2048x.jpg?v=1761156141',
        'https://nordicasauna.com/cdn/shop/files/saunalife-sauna-suite-g11-Interior-500x500_2048x.jpg?v=1761156141'
      ],
      ugc: [], // Populate from /public/ugc/g11/
      video: '',
      aesthetic: {
        filters: {
          saturate: 90,
          contrast: 115,
          brightness: 98,
          sepia: 3
        },
        glassmorphism: {
          enabled: true,
          opacity: 0.05,
          blur: 20,
          borderOpacity: 0.05
        }
      }
    },
    status: {
      inventory: 'in-stock',
      lastVerified: '2026-02-21',
      sourceURL: 'nordicasauna.com (Authorized Dealer)',
      reliability: {
        status: 'Verified',
        lastAudit: '2026-02-21',
        origin: 'Northern Europe'
      }
    }
  },
  
  g4: {
    sku: 'g4',
    name: 'G4 Garden Series',
    series: 'Garden',
    tagline: 'Modern Cube. 6-Person architectural statement.',
    pricing: {
      current: 9490,
      currency: 'USD',
      financing: {
        months: 36,
        apr: 9.99,
        monthlyEstimate: 305
      }
    },
    specifications: {
      capacity: { persons: 6 },
      dimensions: {
        width: 75,
        depth: 75,
        height: 98
      },
      weight: {
        lbs: 1650,
        kg: 748
      },
      material: {
        exterior: 'Thermo-Spruce',
        interior: 'Thermo-Aspen'
      },
      electrical: {
        voltage: '240V',
        amps: 30,
        heater: {
          model: 'Harvia KIP 6kW',
          kw: 6
        }
      }
    },
    metadata: {
      steamDensity: 'medium',
      lightingMood: 'warm-golden',
      climateTriggers: {
        idealTemp: 50,
        maxSummerTemp: 95,
        minWinterTemp: 10
      },
      installation: {
        type: 'outdoor',
        foundation: 'concrete',
        assemblyHours: 4
      }
    },
    assets: {
      hero: 'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-gl4-6-person-outdoor-home-sauna-kit_1000x.jpg',
      gallery: [
        'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-gl4-6-person-outdoor-home-sauna-kit_1000x.jpg',
        'https://myluxuryhomespa.com/cdn/shop/files/saunalife-model-gl4-hero_1000x.jpg'
      ],
      aesthetic: {
        filters: {
          saturate: 85,
          contrast: 115,
          brightness: 95,
          sepia: 3
        },
        glassmorphism: {
          enabled: true,
          opacity: 0.05,
          blur: 20,
          borderOpacity: 0.05
        }
      }
    },
    status: {
      inventory: 'in-stock',
      lastVerified: '2026-02-21',
      sourceURL: 'https://saunalife.com/products/g4'
    }
  },
  
  x2: {
    sku: 'x2',
    name: 'X2 Indoor Xperience',
    series: 'X-Series',
    tagline: 'Architectural Infrared. 2-Person sanctuary for any room.',
    pricing: {
      current: 4295,
      currency: 'USD',
      financing: {
        months: 24,
        apr: 9.99,
        monthlyEstimate: 196
      }
    },
    specifications: {
      capacity: { persons: 2, sittingOnly: true },
      dimensions: {
        width: 55,
        depth: 48,
        height: 81
      },
      weight: {
        lbs: 840,
        kg: 381
      },
      material: {
        exterior: 'Thermo-Spruce',
        interior: 'Knot-Free Aspen'
      },
      electrical: {
        voltage: '120V',
        amps: 15
      }
    },
    metadata: {
      steamDensity: 'infrared',
      lightingMood: 'cool-white',
      climateTriggers: {
        idealTemp: 68,
        maxSummerTemp: 100,
        minWinterTemp: 0
      },
      installation: {
        type: 'indoor',
        foundation: 'none',
        assemblyHours: 4
      }
    },
    assets: {
      hero: 'https://nordicasauna.com/cdn/shop/files/SaunaLife-X2-Front_2048x.jpg?v=1755196338',
      gallery: [
        'https://nordicasauna.com/cdn/shop/files/SaunaLife-X2-Front_2048x.jpg?v=1755196338',
        'https://nordicasauna.com/cdn/shop/files/2-X2-500x500_2048x.jpg?v=1755196338',
        'https://nordicasauna.com/cdn/shop/files/SaunaLifeX2Interior_2048x.jpg?v=1734450768',
        'https://nordicasauna.com/cdn/shop/files/SaunaLife-X2-Floor-Plan_2048x.jpg?v=1734450769'
      ],
      aesthetic: {
        filters: {
          saturate: 85,
          contrast: 120,
          brightness: 95,
          sepia: 0,
          exposure: -0.5
        },
        glassmorphism: {
          enabled: true,
          opacity: 0.05,
          blur: 20,
          borderOpacity: 0.05
        }
      }
    },
    status: {
      inventory: 'in-stock',
      lastVerified: '2026-02-21',
      sourceURL: 'nordicasauna.com (Authorized Dealer)',
      reliability: {
        status: 'Verified',
        lastAudit: '2026-02-21',
        origin: 'Architectural Indoor/Outdoor'
      }
    }
  },
  
  x4: {
    sku: 'x4',
    name: 'X4 Indoor Xperience',
    series: 'X-Series',
    tagline: '4-Person infrared. Architectural scale for your sanctuary.',
    pricing: {
      current: 6500,
      currency: 'USD',
      financing: {
        months: 36,
        apr: 9.99,
        monthlyEstimate: 209
      }
    },
    specifications: {
      capacity: { persons: 4, sittingOnly: true },
      dimensions: {
        width: 79,
        depth: 59,
        height: 81
      },
      weight: {
        lbs: 1180,
        kg: 535
      },
      material: {
        exterior: 'Thermo-Spruce',
        interior: 'Carbon-Nano Infrared Panels + Aspen'
      },
      electrical: {
        voltage: '120V',
        amps: 15
      }
    },
    metadata: {
      steamDensity: 'infrared',
      lightingMood: 'cool-white',
      climateTriggers: {
        idealTemp: 68,
        maxSummerTemp: 100,
        minWinterTemp: 0
      },
      installation: {
        type: 'indoor',
        foundation: 'none',
        assemblyHours: 5
      }
    },
    assets: {
      hero: 'https://placehold.co/800x600/1A1A1A/AF944F?text=X4+Indoor+Xperience',
      gallery: [
        'https://placehold.co/800x600/1A1A1A/AF944F?text=X4+Indoor+Xperience',
        'https://placehold.co/800x600/1A1A1A/AF944F?text=X4+Interior'
      ],
      aesthetic: {
        filters: {
          saturate: 90,
          contrast: 110,
          brightness: 100,
          sepia: 0
        },
        glassmorphism: {
          enabled: true,
          opacity: 0.05,
          blur: 20,
          borderOpacity: 0.05
        }
      }
    },
    status: {
      inventory: 'pre-order',
      lastVerified: '2026-02-21',
      sourceURL: 'https://saunalife.com/products/x4'
    }
  },
  
  x6: {
    sku: 'x6',
    name: 'X6 Indoor Xperience',
    series: 'X-Series',
    tagline: 'Flagship. 6-Person indoor sanctuary.',
    pricing: {
      current: 8500,
      currency: 'USD',
      financing: {
        months: 36,
        apr: 9.99,
        monthlyEstimate: 273
      }
    },
    specifications: {
      capacity: { persons: 6, sittingOnly: true },
      dimensions: {
        width: 95,
        depth: 65,
        height: 81
      },
      weight: {
        lbs: 1450,
        kg: 657
      },
      material: {
        exterior: 'Thermo-Spruce',
        interior: 'Carbon-Nano Infrared Panels + Aspen'
      },
      electrical: {
        voltage: '120V',
        amps: 20
      }
    },
    metadata: {
      steamDensity: 'infrared',
      lightingMood: 'full-spectrum',
      climateTriggers: {
        idealTemp: 68,
        maxSummerTemp: 100,
        minWinterTemp: 0
      },
      installation: {
        type: 'indoor',
        foundation: 'none',
        assemblyHours: 6
      }
    },
    assets: {
      hero: 'https://placehold.co/800x600/1A1A1A/AF944F?text=X6+Indoor+Xperience',
      gallery: [
        'https://placehold.co/800x600/1A1A1A/AF944F?text=X6+Indoor+Xperience',
        'https://placehold.co/800x600/1A1A1A/AF944F?text=X6+Interior'
      ],
      aesthetic: {
        filters: {
          saturate: 90,
          contrast: 110,
          brightness: 100,
          sepia: 0
        },
        glassmorphism: {
          enabled: true,
          opacity: 0.05,
          blur: 20,
          borderOpacity: 0.05
        }
      }
    },
    status: {
      inventory: 'pre-order',
      lastVerified: '2026-02-21',
      sourceURL: 'https://saunalife.com/products/x6'
    }
  },
  
  slate: {
    sku: 'slate',
    name: 'Slate Immersion',
    series: 'Slate',
    tagline: 'Precision cold plunge. 39°F.',
    pricing: {
      current: 5995,
      currency: 'USD',
      financing: {
        months: 24,
        apr: 9.99,
        monthlyEstimate: 275
      }
    },
    specifications: {
      capacity: { persons: 1 },
      dimensions: {
        width: 48,
        depth: 24,
        height: 36
      },
      weight: {
        lbs: 450,
        kg: 204
      },
      material: {
        exterior: 'Powder-Coated Aluminum',
        interior: 'Antimicrobial Polymer',
        insulation: 'Closed-Cell Foam'
      },
      electrical: {
        voltage: '120V',
        amps: 10
      }
    },
    metadata: {
      steamDensity: 'low',
      lightingMood: 'cool-white',
      climateTriggers: {
        idealTemp: 68,
        maxSummerTemp: 120,
        minWinterTemp: -20
      },
      installation: {
        type: 'indoor',
        foundation: 'none',
        assemblyHours: 2
      }
    },
    assets: {
      hero: 'https://placehold.co/800x600/1A1A1A/AF944F?text=Slate+Immersion',
      gallery: [
        'https://placehold.co/800x600/1A1A1A/AF944F?text=Slate+Immersion'
      ],
      aesthetic: {
        filters: {
          saturate: 70,
          contrast: 120,
          brightness: 90,
          sepia: 0
        },
        glassmorphism: {
          enabled: true,
          opacity: 0.05,
          blur: 20,
          borderOpacity: 0.05
        }
      }
    },
    status: {
      inventory: 'pre-order',
      lastVerified: '2026-02-21',
      sourceURL: 'https://saunalife.com/products/slate'
    }
  }
};

// Global configuration for all products
export const INFRASTRUCTURE_CONFIG = {
  aestheticGuidelines: {
    tone: "Architectural Excellence",
    visualHierarchy: "Material First",
    colorPalette: {
      onyx: '#0A0A0A',
      slate: '#2D2D2D', 
      champagneGold: '#C5A059',
      offWhite: '#F5F5F7'
    },
    motionCurve: [0.22, 1, 0.36, 1], // Smooth, high-end deceleration
  },
  
  moodProfiles: {
    Refined: {
      exposure: -0.2,
      contrast: 1.15,
      saturation: 0.9,
      blur: "0px", // No atmospheric blur, stay sharp
      overlay: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
    },
    Twilight: {
      exposure: -0.5,
      contrast: 1.2,
      saturation: 1.1,
      colorTemp: "Warm",
      overlay: "linear-gradient(225deg, rgba(20,20,30,0.2) 0%, rgba(0,0,0,0.7) 100%)",
    },
    Minimal: {
      exposure: 0,
      contrast: 1.1,
      saturation: 0.85,
      blur: "0px",
      overlay: "none",
    },
    Nordic: {
      exposure: 0.1,
      contrast: 1.05,
      saturation: 0.8,
      colorTemp: "Cool",
      overlay: "linear-gradient(180deg, rgba(245,245,247,0.1) 0%, rgba(0,0,0,0.2) 100%)",
    }
  }
};

export const globalConfig = {
  brand: {
    name: 'Lux Haven Infrastructure',
    tagline: 'Infrastructure for Your Sanctuary',
    primaryColor: INFRASTRUCTURE_CONFIG.aestheticGuidelines.colorPalette.onyx,
    secondaryColor: INFRASTRUCTURE_CONFIG.aestheticGuidelines.colorPalette.slate,
    accentColor: INFRASTRUCTURE_CONFIG.aestheticGuidelines.colorPalette.champagneGold,
    neutralColor: INFRASTRUCTURE_CONFIG.aestheticGuidelines.colorPalette.offWhite
  },
  aesthetics: {
    // Global 'Lux Mood' settings
    image: {
      filters: {
        saturate: 90,
        contrast: 115,
        brightness: 98,
        sepia: 3,
        warmth: 5
      },
      slowFadeTransition: {
        duration: '0.8s',
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)' // High-end deceleration
      }
    },
    glassmorphism: {
      default: {
        enabled: true,
        opacity: 0.04,
        blur: 20,
        borderOpacity: 0.04,
        borderWidth: '1px',
        borderColor: 'rgba(10, 10, 10, 0.04)'
      }
    },
    components: {
      cards: {
        borderRadius: '2px',
        border: '1px solid rgba(10, 10, 10, 0.04)',
        backgroundColor: 'rgba(245, 245, 247, 0.96)',
        backdropFilter: 'blur(20px)'
      },
      buttons: {
        primary: {
          backgroundColor: INFRASTRUCTURE_CONFIG.aestheticGuidelines.colorPalette.onyx,
          color: INFRASTRUCTURE_CONFIG.aestheticGuidelines.colorPalette.offWhite,
          border: `1px solid ${INFRASTRUCTURE_CONFIG.aestheticGuidelines.colorPalette.champagneGold}`,
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
        }
      }
    }
  },
  monitoring: {
    // Health check configuration
    checkIntervalHours: 24,
    fallbackOrder: ['saunalife.com', 'myluxuryhomespa.com', 'nordicsauna.com'],
    automaticResolution: true,
    notifyOnChange: true
  }
};

// Helper functions for the orchestrator
export function getProduct(sku: string): ProductInfrastructure | undefined {
  return infrastructure[sku.toLowerCase()];
}

export function getAllProducts(): ProductInfrastructure[] {
  return Object.values(infrastructure);
}

export function getProductsBySeries(series: ProductInfrastructure['series']): ProductInfrastructure[] {
  return Object.values(infrastructure).filter(p => p.series === series);
}

export function updateProduct(sku: string, updates: Partial<ProductInfrastructure>): void {
  if (infrastructure[sku]) {
    infrastructure[sku] = { ...infrastructure[sku], ...updates };
    infrastructure[sku].status.lastVerified = new Date().toISOString().split('T')[0];
  }
}

export function getAestheticFilters(sku: string) {
  const product = getProduct(sku);
  return product?.assets.aesthetic.filters ?? globalConfig.aesthetics.image.filters;
}

// Export for external use
export default infrastructure;
