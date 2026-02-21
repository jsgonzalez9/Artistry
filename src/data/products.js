/**
 * Lux Haven Infrastructure - Product Catalog
 * High-ticket wellness infrastructure with full technical specs
 */

import saunas from './saunas.json';
import finnmark from './finnmark.json';

// Transform JSON into product card format for ArtistryNest

// SaunaLife Thermo-Spruce Barrel Saunas
export const saunaProducts = saunas.models.map(model => ({
  id: `saunalife-${model.id.toLowerCase()}`,
  sku: `SNL-${model.id}`,
  manufacturer: saunas.manufacturer,
  series: saunas.series,
  name: model.name,
  short_description: `${model.capacity} Person ${model.material} Barrel Sauna`,
  full_description: `
    The ${model.name} represents the gold standard in outdoor wellness infrastructure. 
    Crafted from architectural-grade Thermo-Spruce (thermo-treated at 212°C), this sauna 
    delivers 25+ years of maintenance-free service in extreme weather conditions.
    
    Unlike traditional cedar saunas that rot, warp, and require constant maintenance, 
    Thermo-Spruce is naturally resistant to decay, insects, and moisture absorption. 
    No chemicals, no additives—just physics and precision.
  `,
  price: model.price_msrp,
  price_formatted: `$${model.price_msrp.toLocaleString()}`,
  capacity: model.capacity,
  weight_lbs: model.weight_lbs,
  dimensions: model.dimensions,
  electrical: model.electrical,
  material: model.material,
  shipping_class: model.shipping_class,
  lead_time: `${model.lead_time_weeks} weeks`,
  warranty: `${model.warranty_years} years`,
  features: model.features,
  installation_requirements: model.installation_requirements,
  blueprint_url: model.blueprint_url,
  image_url: model.image_url,
  category: 'saunas',
  tags: ['thermo-spruce', 'outdoor sauna', 'luxury wellness', 'SaunaLife'],
  in_stock: true,
  shipping_note: 'LTL Freight with liftgate. White-glove delivery available.',
  consultative_sale: true
}));

// Export individual models
export const g11Panoramic = saunaProducts.find(p => p.id === 'saunalife-g11');
export const g4Cube = saunaProducts.find(p => p.id === 'saunalife-g4');

// Utility function to get product by ID
export const getProductById = (id) => saunaProducts.find(p => p.id === id);

// Utility function to get all products by category
export const getProductsByCategory = (category) => saunaProducts.filter(p => p.category === category);

// Finnmark X-Series Infrared Saunas
export const infraredProducts = finnmark.products.map(model => ({
  id: `finnmark-${model.model.toLowerCase()}`,
  sku: `FMK-${model.model}`,
  manufacturer: finnmark.brand,
  series: finnmark.series,
  name: model.name,
  short_description: `${model.capacity} Person ${finnmark.category} with Ultra-Low EMF`,
  full_description: `
    The ${model.name} delivers the therapeutic benefits of infrared heat with medical-grade 
    construction and ultra-low EMF emissions (<3 mG). Built with Canadian Hemlock and carbon 
    fiber heating panels, this sauna provides a pure, effective wellness experience in the 
    comfort of your home.
  `,
  price: model.pricing.msrp,
  price_formatted: `$${model.pricing.msrp.toLocaleString()}`,
  capacity: model.capacity,
  weight_lbs: parseInt(model.weight.shipping),
  dimensions: `${model.dimensions.assembled.length} x ${model.dimensions.assembled.width} x ${model.dimensions.assembled.height}`,
  electrical: `${model.electrical.voltage} / ${model.electrical.amps}A`,
  material: model.materials.wood,
  shipping_class: model.shipping.class,
  lead_time: model.shipping.leadTime,
  warranty: `${model.warranty.structure} years structure`,
  features: model.features,
  emf_rating: model.emf.rating,
  heating_type: model.heating.type,
  max_temp: model.heating.maxTemp,
  image_url: model.images.hero,
  category: 'infrared-saunas',
  tags: ['infrared', 'low-EMF', 'carbon-fiber', 'Finnmark'],
  in_stock: true,
  shipping_note: 'LTL Freight with liftgate. White-glove delivery available.',
  consultative_sale: true
}));

// Export individual Finnmark models
export const x1Infrared = infraredProducts.find(p => p.id === 'finnmark-x-series-1p');
export const x2Infrared = infraredProducts.find(p => p.id === 'finnmark-x-series-2p');
export const x3Infrared = infraredProducts.find(p => p.id === 'finnmark-x-series-3p');
export const x4Infrared = infraredProducts.find(p => p.id === 'finnmark-x-series-4p');

// Combined product catalog (all categories)
export const allProducts = [...saunaProducts, ...infraredProducts];

// Utility function to get all products by category
export const getProductsByCategory = (category) => {
  if (category === 'infrared-saunas') {
    return infraredProducts;
  }
  return saunaProducts.filter(p => p.category === category);
};
