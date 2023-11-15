import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("art_records").select();
        return {
        art_records: data ?? [],
    };
}