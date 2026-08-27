const supabase = require('../config/supabase');

class Product {
  /**
   * List all products.
   * @returns {Promise<{data: any[] | null, error: any}>}
   */
  static async findAll() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('name', { ascending: true });

    return { data, error };
  }

  /**
   * Find product by ID.
   * @param {string} id - Product UUID
   * @returns {Promise<{data: any | null, error: any}>}
   */
  static async findById(id) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    return { data, error };
  }

  /**
   * Find product by code.
   * @param {string} code - Product code
   * @returns {Promise<{data: any | null, error: any}>}
   */
  static async findByCode(code) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('code', code)
      .maybeSingle();

    return { data, error };
  }

  /**
   * Create a new product.
   * @param {Object} productData
   * @param {string} productData.name
   * @param {string} productData.code
   * @param {string} [productData.description]
   * @param {string} productData.unit_of_measure
   * @returns {Promise<{data: any | null, error: any}>}
   */
  static async create({ name, code, description, unit_of_measure }) {
    const { data, error } = await supabase
      .from('products')
      .insert([{ name, code, description, unit_of_measure }])
      .select()
      .single();

    return { data, error };
  }

  /**
   * Update an existing product.
   * @param {string} id - Product UUID
   * @param {Object} productData
   * @param {string} [productData.name]
   * @param {string} [productData.code]
   * @param {string} [productData.description]
   * @param {string} [productData.unit_of_measure]
   * @returns {Promise<{data: any | null, error: any}>}
   */
  static async update(id, { name, code, description, unit_of_measure }) {
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (code !== undefined) updateData.code = code;
    if (description !== undefined) updateData.description = description;
    if (unit_of_measure !== undefined) updateData.unit_of_measure = unit_of_measure;
    updateData.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('products')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    return { data, error };
  }

  /**
   * Delete a product.
   * @param {string} id - Product UUID
   * @returns {Promise<{error: any}>}
   */
  static async delete(id) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    return { error };
  }
}

module.exports = Product;
