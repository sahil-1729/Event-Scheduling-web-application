const supabase = require("../config/supabaseClient.js");

exports.createUser = async (userData) => {
    console.log(userData)
    const { data, error } = await supabase
        .from("Users")
        .insert(userData)
        .select();

    if (error) throw new Error(error.message);
    return data;
};

// exports.getUsers = async () => {
//     const { data, error } = await supabase.from("users").select("*");

//     if (error) throw new Error(error.message);
//     return data;
// };

exports.getUserByEmail = async (email) => {
    const { data, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", email)
        .single();

    if (error && error.code !== 'PGRST116') throw new Error(error.message);
    return data;
};

// exports.updateUser = async (id, updates) => {
//     const { data, error } = await supabase
//         .from("users")
//         .update(updates)
//         .eq("id", id)
//         .select();

//     if (error) throw new Error(error.message);
//     return data;
// };

// exports.deleteUser = async (id) => {
//     const { error } = await supabase
//         .from("users")
//         .delete()
//         .eq("id", id);

//     if (error) throw new Error(error.message);
//     return { success: true, message: "User deleted successfully" };
// };

// exports.searchUsers = async (query) => {
//     const { data, error } = await supabase
//         .from("users")
//         .select("*")
//         .ilike("name", `%${query}%`);

//     if (error) throw new Error(error.message);
//     return data;
// };