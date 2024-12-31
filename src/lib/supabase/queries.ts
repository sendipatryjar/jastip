import { supabase } from './client';
import { RecapData } from '@/utils/types';

export async function createRecap(data: Omit<RecapData, 'id' | 'created_at'>) {
  try {
    const { data: recap, error } = await supabase
      .from('recaps')
      .insert(data)
      .select()
      .single();

    if (error) {
      console.error('Error creating recap:', error);
      throw error;
    }
    
    return recap;
  } catch (error) {
    console.error('Failed to create recap:', error);
    throw error;
  }
}


export async function updateRecap(data: any, id: any) {
    const { error } = await supabase
    .from('recaps')
    .update({ order_status: data })
    .eq('id', id)
  }

export async function getRecaps() {
    try {
      const { data: recaps, error } = await supabase
        .from('recaps')
        .select('*');
  
      if (error) {
        console.error('Error fetching recaps:', error);
        throw error;
      }
  
      if (!recaps) {
        console.warn('No recap data found');
        return [];
      }
  
      console.log('Recap data retrieved:', recaps);
      return recaps;
    } catch (error) {
      console.error('Failed to fetch recaps:', error);
      throw error;
    }
  }
  