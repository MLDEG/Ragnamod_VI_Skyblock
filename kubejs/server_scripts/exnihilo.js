events.listen('recipes', function (e) {
    /********************************GRAVEL*******************************/
    //Coal
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.3, "mesh": "flint" },
            { "chance": 0.5, "mesh": "iron" },
            { "chance": 0.7, "mesh": "diamond" },
            { "chance": 0.9, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:coal" }
    })
    //Lapis
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.1, "mesh": "flint" },
            { "chance": 0.5, "mesh": "iron" },
            { "chance": 0.7, "mesh": "diamond" },
            { "chance": 0.9, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:lapis_lazuli" }
    })
    //Aluminum Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.1, "mesh": "flint" },
            { "chance": 0.5, "mesh": "iron" },
            { "chance": 0.7, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_aluminum" }
    })
    //Copper Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.1, "mesh": "flint" },
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_copper" }
    })
    //Iron Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.2, "mesh": "flint" },
            { "chance": 0.4, "mesh": "iron" },
            { "chance": 0.7, "mesh": "diamond" },
            { "chance": 0.9, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_iron" }
    })
    //Zinc Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.2, "mesh": "flint" },
            { "chance": 0.4, "mesh": "iron" },
            { "chance": 0.7, "mesh": "diamond" },
            { "chance": 0.9, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_zinc" }
    })
    //Silver Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_silver" }
    })
    //Lead Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_lead" }
    })
    //Diamond
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.05, "mesh": "iron" },
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:diamond" }
    })
    //Emerald
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.1, "mesh": "iron" },
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:emerald" }
    })
    //Osmium Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.4, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_osmium" }
    })
    //Rune
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "forbidden_arcanus:rune" }
    })
    //Amethyst
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:gravel" },
        "rolls": [
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "iceandfire:amythest_gem" }
    })
    /********************************SAND*******************************/
    //Aquamarine
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "astralsorcery:aquamarine" }
    })
    //Nickel Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.2, "mesh": "iron" },
            { "chance": 0.4, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_nickel" }
    })
    //Tin Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.6, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_tin" }
    })
    //Uranium Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.4, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_uranium" }
    })
    //Ruby
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.6, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "thermal:ruby" }
    })
    //Sapphire
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.6, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "thermal:sapphire" }
    })
    //Source Gem Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_source_gem" }
    })
    //Arcane Crystal
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:sand" },
        "rolls": [
            { "chance": 0.4, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "forbidden_arcanus:arcane_crystal" }
    })
    /********************************DUST*******************************/
    //Gun Powder
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.1, "mesh": "string" },
            { "chance": 0.2, "mesh": "flint" },
            { "chance": 0.4, "mesh": "iron" },
            { "chance": 0.6, "mesh": "diamond" },
            { "chance": 0.9, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:gunpowder" }
    })
    //Bone Meal
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.02, "mesh": "string" },
            { "chance": 0.1, "mesh": "flint" },
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.4, "mesh": "diamond" },
            { "chance": 0.6, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:bone_meal" }
    })
    //Redstone
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.2, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:redstone" }
    })
    //Glowstone
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.8, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:glowstone_dust" }
    })
    //Cinnabar
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.6, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "thermal:cinnabar" }
    })
    //Apatite
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.7, "mesh": "diamond" },
            { "chance": 0.9, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "thermal:apatite" }
    })
    //Uraninite
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "powah:uraninite" }
    })
    //Token Fragment
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:dust" },
        "rolls": [
            { "chance": 0.01, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "rats:token_fragment" }
    })
    /********************************CRUSHED NETHERRACK*******************************/
    //Gold Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.3, "mesh": "flint" },
            { "chance": 0.5, "mesh": "iron" },
            { "chance": 0.7, "mesh": "diamond" },
            { "chance": 0.9, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_gold" }
    })
    //Soulium Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.1, "mesh": "flint" },
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_soulium" }
    })
    //Cobalt Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.2, "mesh": "iron" },
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_cobalt" }
    })
    //Blaze Powder
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.1, "mesh": "iron" },
            { "chance": 0.2, "mesh": "diamond" },
            { "chance": 0.4, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:blaze_powder" }
    })
    //Niter
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.2, "mesh": "iron" },
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "thermal:niter" }
    })
    //Sulfur
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.3, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "thermal:sulfur" }
    })
    //Tungsten Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.2, "mesh": "diamond" },
            { "chance": 0.4, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_tungsten" }
    })
    //Emeraldite Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_emeraldite" }
    })
    //Pendorite Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.05, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_pendorite" }
    })
    //Netherite Scrap
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_netherrack" },
        "rolls": [
            { "chance": 0.05, "mesh": "diamond" },
            { "chance": 0.2, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:netherite_scrap" }
    })
    /********************************SOUL SAND*******************************/
    //Quartz
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.2, "mesh": "flint" },
            { "chance": 0.4, "mesh": "iron" },
            { "chance": 0.5, "mesh": "diamond" },
            { "chance": 0.7, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:quartz" }
    })
    //Ghast Tiers
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.05, "mesh": "flint" },
            { "chance": 0.1, "mesh": "iron" },
            { "chance": 0.2, "mesh": "diamond" },
            { "chance": 0.4, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:ghast_tear" }
    })
    //Shroom Fruit
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.2, "mesh": "iron" },
            { "chance": 0.4, "mesh": "diamond" },
            { "chance": 0.6, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "gildedingot:shroom_fruit" }
    })
    //Nether Wart
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.1, "mesh": "iron" },
            { "chance": 0.2, "mesh": "diamond" },
            { "chance": 0.4, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:nether_wart" }
    })
    //Warped Nether Wart
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.1, "mesh": "iron" },
            { "chance": 0.2, "mesh": "diamond" },
            { "chance": 0.4, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "brazier:warped_nether_wart" }
    })
    //Warped Fungus
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.05, "mesh": "iron" },
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:warped_fungus" }
    })
    //Crimson Fungus
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.05, "mesh": "iron" },
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:crimson_fungus" }
    })
    //Crimson Roots
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:crimson_roots" }
    })
    //Warped Roots
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:warped_roots" }
    })
    //Twisting Vines
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:twisting_vines" }
    })
    //Weeping Vines
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "minecraft:soul_sand" },
        "rolls": [
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.3, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:weeping_vines" }
    })
    /********************************CRUSHED END STONE*******************************/
    //Ender Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_end_stone" },
        "rolls": [
            { "chance": 0.1, "mesh": "iron" },
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_ender" }
    })
    //Ender Pearl
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_end_stone" },
        "rolls": [
            { "chance": 0.1, "mesh": "iron" },
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "minecraft:ender_pearl" }
    })
    //Amber Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_end_stone" },
        "rolls": [
            { "chance": 0.1, "mesh": "diamond" },
            { "chance": 0.4, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_amber" }
    })
    //Platinum Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_end_stone" },
        "rolls": [
            { "chance": 0.2, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_platinum" }
    })
    //Fluorite
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_end_stone" },
        "rolls": [
            { "chance": 0.3, "mesh": "diamond" },
            { "chance": 0.5, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "mekanism:fluorite_gem" }
    })
    //Endumium Ore Piece
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_end_stone" },
        "rolls": [
            { "chance": 0.05, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "ragnamod_6_sky:piece_endumium" }
    })
    //Ametrine
    e.custom({
        "type": "exnihilosequentia:sieve",
        "input": { "item": "exnihilosequentia:crushed_end_stone" },
        "rolls": [
            { "chance": 0.1, "mesh": "emerald" },
            { "chance": 1.0, "mesh": "netherite" }
        ],
        "result": { "item": "byg:ametrine_gems" }
    })

    //Crook
    e.shaped(item.of('exnihilosequentia:crook_stone', 1), ['AA', ' B', ' B'], { A: '#pebble_generation:pebble_tag', B: 'minecraft:stick' })

})