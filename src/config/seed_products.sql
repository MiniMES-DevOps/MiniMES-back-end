-- Seed data for products
INSERT INTO products (name, code, description, unit_of_measure)
VALUES 
  ('Chapa de Aço 2mm', 'CHP-001', 'Chapa de aço carbono laminada a quente com espessura de 2mm', 'un'),
  ('Parafuso Sextavado M8', 'PAR-0820', 'Parafuso sextavado zincado M8 x 20mm', 'cento'),
  ('Cabo Elétrico Flexível 2.5mm²', 'CAB-25F', 'Cabo elétrico flexível isolado PVC 750V', 'm'),
  ('Motor Elétrico Trifásico 2HP', 'MOT-2HP', 'Motor elétrico de indução trifásico carcaça de alumínio', 'un'),
  ('Tinta Epóxi Cinza N6.5', 'TNT-EPX', 'Tinta epóxi bicomponente de alta espessura cor cinza', 'l')
ON CONFLICT (code) DO NOTHING;
