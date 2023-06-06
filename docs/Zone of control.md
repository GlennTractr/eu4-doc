Zone of control
===============

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

![Wiki letter w.png](https://central.paradoxwikis.com/images/6/6a/Wiki_letter_w.png)

Please help improve this article or section by [**expanding it**](https://eu4.paradoxwikis.com/index.php?title=Zone_of_control&action=edit) with: Information about the many changes to the movement rules since version 1.31.

Forts limit unit movement due to their zones of control ("ZoC"). This article explains precisely how they **used to work in version 1.28**.

The key concept to understand is that movement of a unit depends on what its "Return Province" is, and not just on the province it is or the adjacent province it came from.

Note that all the information there has been worked out by experimentation and does not come from knowledge of the actual game code, and thus might potentially be inaccurate.

Many of the images in this article are in "Fort Level" [map mode](/Map_mode "Map mode").

Contents
--------

*   [1 Concepts](#Concepts)
    *   [1.1 ZoC and non-ZoC provinces](#ZoC_and_non-ZoC_provinces)
    *   [1.2 Return Province of a unit](#Return_Province_of_a_unit)
    *   [1.3 Distance from Return Province](#Distance_from_Return_Province)
    *   [1.4 Previous Province of a unit](#Previous_Province_of_a_unit)
    *   [1.5 Merging and reorganizing units](#Merging_and_reorganizing_units)
*   [2 Movement rules](#Movement_rules)
    *   [2.1 Non-ZoC rule](#Non-ZoC_rule)
    *   [2.2 Previous Province rule](#Previous_Province_rule)
    *   [2.3 Ship rule](#Ship_rule)
    *   [2.4 Fort rule](#Fort_rule)
        *   [2.4.1 Where the fort rule does NOT apply](#Where_the_fort_rule_does_NOT_apply)
    *   [2.5 ZoC rule](#ZoC_rule)
        *   [2.5.1 Where the ZoC rule does NOT apply](#Where_the_ZoC_rule_does_NOT_apply)
*   [3 Important consequences of the movement rules](#Important_consequences_of_the_movement_rules)
    *   [3.1 A→C via B being allowed does not imply A→B→C being allowed](#A.E2.86.92C_via_B_being_allowed_does_not_imply_A.E2.86.92B.E2.86.92C_being_allowed)
    *   [3.2 Pathfinding does not find the shortest path and depends on the Return Province](#Pathfinding_does_not_find_the_shortest_path_and_depends_on_the_Return_Province)
*   [4 Other consequences of the movement rules](#Other_consequences_of_the_movement_rules)
    *   [4.1 Clearing misconceptions](#Clearing_misconceptions)
    *   [4.2 Miscellanous considerations](#Miscellanous_considerations)
    *   [4.3 Combining units](#Combining_units)
    *   [4.4 Rings/barriers of ZoC provinces and defending with them](#Rings.2Fbarriers_of_ZoC_provinces_and_defending_with_them)
    *   [4.5 Attacking rings/barriers of ZoC provinces and getting trapped in them](#Attacking_rings.2Fbarriers_of_ZoC_provinces_and_getting_trapped_in_them)
*   [5 Reproducing the screenshots](#Reproducing_the_screenshots)
*   [6 See also](#See_also)

Concepts\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=1 "Edit section: Concepts") | [edit source](/index.php?title=Zone_of_control&action=edit&section=1 "Edit section: Concepts")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

### ZoC and non-ZoC provinces\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=2 "Edit section: ZoC and non-ZoC provinces") | [edit source](/index.php?title=Zone_of_control&action=edit&section=2 "Edit section: ZoC and non-ZoC provinces")\]

From the point of view of each country, the land provinces of the world are divided in ZoC provinces and non-ZoC provinces.

Let's consider you and an enemy at war. First, only forts that are non-mothballed and level 2 or higher project a ZoC; the enemy's capital with no fort buildings will not project a ZoC. Enemy forts will only project their zone of control (ZoC) onto enemy-_owned_ provinces that are next to the fort province. There's one exception to the "enemy-owned" part: forts of _yours_ that an enemy captures in war _will_ extend the enemy's ZoC on not just enemy-owned provinces but _also_ provinces that you own. Enemy-_native_ forts (forts on provinces the enemy already _owns_, not just occupied in war -- e.g., forts in enemy provinces directly on your border) will _not_ project their ZoC into provinces you already own. Then, if a province under the enemy fort's ZoC becomes _occupied_ by you (but not _owned_ by you, which can only happen via later annexation), this will _not_ exclude it from the enemy fort's ZoC. If you siege the enemy fort and occupy its province, it will no longer project a ZoC for the enemy, but it will now project one for _you_ that blocks the _enemy's_ troop movements since it now acts like your fort! Further, in reflecting the exception from before, this _captured_ fort will also project its ZoC over enemy-owned provinces while your native forts (forts in provinces you already own) will not project a ZoC over enemy-owned provinces.

Occupation by anyone of a province without a fort will never change ZoC because occupation status only matters for the fort itself. The only way to maintain the occupation status for the attacker is to maintain at all times a unit on said province; otherwise, the occupied status will be removed about a month after the last attacking unit left the province. Another way to do that is to besiege the fort that created the zone of control over the province, for as long as the siege will last no province within its zone of control will be able to be liberated.

ZoC provinces have a tooltip that says "Within the FORT COUNTRY fort in FORT PROVINCE's zone of control", and have bars in the Fort map mode.

It doesn't apparently matter which fort a province is in the ZoC of and thus multiple forts don't introduce complications. Incidentally, the game apparently assigns ZoC using a single global ordering of forts, and a fort can thus be in the ZoC of another fort rather than itself, although this seems to have no effect, as a fort exercises its zone of control prioritarily on the province it is built. As a rule, when a fort is occupied, it can only be liberated after a regular army sieged it down again (or if the war ended). So, even if a fort lies in the ZoC of one or several allied forts, its owner will still have to send an army to besiege it again in order to get it liberated.

ZoC only applies to issuing movement orders, it does not apply to any movement orders issued before the ZoC existed. For example, if a fort is mothballed and then activated after an army is queued to walk past it the army will walk past unmolested.

*   [![](/images/thumb/0/0b/ZoC_-_Athens_-_to_Felipe_with_Mothballed_Fort_at_Selenik.jpg/551px-ZoC_-_Athens_-_to_Felipe_with_Mothballed_Fort_at_Selenik.jpg)](/File:ZoC_-_Athens_-_to_Felipe_with_Mothballed_Fort_at_Selenik.jpg)
    
    The mothballed fort at Selanik doesn't prevent movement to Filibe
    
*   [![](/images/thumb/9/9c/ZoC_-_Athens_-_to_Felipe_with_Unmothballed_Fort_of_Selenik_with_0_garrison.jpg/491px-ZoC_-_Athens_-_to_Felipe_with_Unmothballed_Fort_of_Selenik_with_0_garrison.jpg)](/File:ZoC_-_Athens_-_to_Felipe_with_Unmothballed_Fort_of_Selenik_with_0_garrison.jpg)
    
    One day after the fort at Selanik is unmothballed, it immediately prevents new movement commands to Filibe, even with 0 garrison
    
*   [![](/images/thumb/8/81/ZoC_-_Eastern_Black_Sea_-_Canik_to_Bolu.jpg/801px-ZoC_-_Eastern_Black_Sea_-_Canik_to_Bolu.jpg)](/File:ZoC_-_Eastern_Black_Sea_-_Canik_to_Bolu.jpg)
    
    The fort in Ankara projects ZoC in the neutral province of Kastamonu, preventing movement from Canik to Bolu
    
*   [![](/images/thumb/7/7f/ZoC_-_Ligurian_Sea_-_Avignon_to_Provence.jpg/539px-ZoC_-_Ligurian_Sea_-_Avignon_to_Provence.jpg)](/File:ZoC_-_Ligurian_Sea_-_Avignon_to_Provence.jpg)
    
    In 1792 the province of Nice is a ZoC province from the point of view of Sardinia-Piedmont due to the fort of Cuneo (Coni) being occupied...
    
*   [![](/images/thumb/3/36/ZoC_-_Ownership_of_Nice.jpg/465px-ZoC_-_Ownership_of_Nice.jpg)](/File:ZoC_-_Ownership_of_Nice.jpg)
    
    ...even though Nice is an unoccupied province that we own!
    

### Return Province of a unit\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=3 "Edit section: Return Province of a unit") | [edit source](/index.php?title=Zone_of_control&action=edit&section=3 "Edit section: Return Province of a unit")\]

Each land unit stores a "Return Province", which is the last non-ZoC land province or sea tile it left (in the "previous\_war" variable in the save file), if it hasn't been reset due to becoming ZoC since.

The Return Province is updated when a unit leaves a non-ZoC province, not when it enters it! This matters, as described [below](#A-.3EC_via_B_being_allowed_does_not_imply_A-.3EB-.3EC_being_allowed). The Return Province is also cleared if it becomes a ZoC province, which means the Return Province is guaranteed to always be a non-ZoC province (or a sea tile). It seems that nothing else other than these two events affects the Return Province, including for instance sieging down a fort such that your unit is now in a non-ZoC province.

Note that the Return Province won't be reset if it becomes militarily inaccessible, and in fact that has no effect on movement as described in the ZoC rule (you can even move to the Return Province itself if it's inaccessible!).

When a player-controlled unit is in a ZoC province, the Return Province is shown on the map as a green flag, with the tooltip saying "Return province". Note that if you are in a non-ZoC province, there will still be a Return Province that will be used for the first movement command away from it (since it's only updated when you leave a non-ZoC province), but it won't be shown with a green flag on the map.

For non-player-controlled units and player controlled units in a ZoC province, there doesn't seem to be a way to determine what their Return Province is, other than watching their movements and remembering it, or saving the game and looking at the save file in a text editor.

The allowed movement of a unit depends not only on the province it is in, but also on its Return Province (and the Previous Province, although it only rarely matters).

*   [![](/images/a/a9/ZoC_-_Return_Province.jpg)](/File:ZoC_-_Return_Province.jpg)
    
    Return Province indicator. Only shown for friendly units in a ZoC province, but all units have a Return Province stored.
    

### Distance from Return Province\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=4 "Edit section: Distance from Return Province") | [edit source](/index.php?title=Zone_of_control&action=edit&section=4 "Edit section: Distance from Return Province")\]

Each province can be thought to have a distance from the Return Province corresponding to the number of provinces in the shortest among the paths starting from it and visiting non-ZoC land provinces you have military access to, regardless of blocked straits, and then ending with either a non-ZoC province, a ZoC province or a ZoC province without a fort controlled by an enemy followed by a ZoC province with a fort controlled by an enemy (if there are no such paths, assign an infinite distance).

It seems that the movement rules only care about whether provinces are at distance 0, 1 or 2 from the Return Province, as the ZoC rule allows you to move to them if they don't have a non-neutral fort, and that the distance from the Return Province is otherwise irrelevant.

*   [![](/images/thumb/e/e7/ZoC_-_Distances_from_Return_Province_Vidin.jpg/422px-ZoC_-_Distances_from_Return_Province_Vidin.jpg)](/File:ZoC_-_Distances_from_Return_Province_Vidin.jpg)
    
    Distances from Return Province Vidin
    
*   [![](/images/thumb/b/b8/ZoC_-_Distances_from_Return_Province_Nigbolu.jpg/629px-ZoC_-_Distances_from_Return_Province_Nigbolu.jpg)](/File:ZoC_-_Distances_from_Return_Province_Nigbolu.jpg)
    
    Distances from Return Province Nigbolu
    

### Previous Province of a unit\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=5 "Edit section: Previous Province of a unit") | [edit source](/index.php?title=Zone_of_control&action=edit&section=5 "Edit section: Previous Province of a unit")\]

Each unit stores the Previous Province, i.e. the adjacent province it came from (in the "previous" variable in the save file). There doesn't seem to be a way to tell what it is from the game UI.

There's a movement rule that lets you go back to the Previous Province, but in most cases the Previous Province is already accessible according to the other rules.

Exceptions are due to the movement patterns made possible by the Return Province being only set when leaving a province, or due to the land or diplomatic landscape somehow changing.

Note that only the immediately previous province is stored, so you can't go back arbitrarily far.

### Merging and reorganizing units\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=6 "Edit section: Merging and reorganizing units") | [edit source](/index.php?title=Zone_of_control&action=edit&section=6 "Edit section: Merging and reorganizing units")\]

If you merge units, the merged unit has the Return Province of one of the merged units; it seems that it is the Return Province shown on the map when the multiple units are selected, which seems to be the one of the first unit in the list from which the merged unit also takes its name from; in turn, the list seems to be ordered according to the creation date of the army (where merging doesn't count as creation).

However, if you use the Reorganize Units button instead of the Merge button, and the units don't both have a general in hostile territory, it is possible to move all regiments from a unit into another, and the Return Province of the unit you moved regiments to is of course used for the resulting unit.

See [below](#Combining_units) for a detailed instructions on how to combine units with the desired Return Province in almost all cases.

Movement rules\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=7 "Edit section: Movement rules") | [edit source](/index.php?title=Zone_of_control&action=edit&section=7 "Edit section: Movement rules")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

Movement to a non-adjacent province is possible if and only if movement is possible "step by step" but without updating the Return Province between each step (this sometimes matters as described below). Note that the Return Province is updated after each non-ZoC province is left even if a non-adjacent movement command is sent and the lack of update only matters when deciding if the movement is allowed. Battles do not cancel movement commands, and movement resumes once the battle ends (assuming the unit did not retreat or got stack wiped).

Note that all ZoC rules are checked at the time the movement order is given. Changes in ZoC afterwards are ignored.

Movement to an adjacent province is only possible if you have military access to it (with the exception of moving to the Return Province) and if there isn't a blocked strait (with no exceptions). For rules about when a strait is blocked, see [Naval warfare § Blocking a strait](/Naval_warfare#Blocking_a_strait "Naval warfare").

Once that is satisfied, then movement is possible if any of the following rules applies.

### Non-ZoC rule\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=8 "Edit section: Non-ZoC rule") | [edit source](/index.php?title=Zone_of_control&action=edit&section=8 "Edit section: Non-ZoC rule")\]

You can always move from a non-ZoC province to any adjacent province.

### Previous Province rule\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=9 "Edit section: Previous Province rule") | [edit source](/index.php?title=Zone_of_control&action=edit&section=9 "Edit section: Previous Province rule")\]

You can always move back to the Previous Province, i.e. the adjacent province you came from.

*   [![](/images/thumb/e/e5/ZoC_-_Constantinople_-_Tirgoviste_to_Silistre.jpg/420px-ZoC_-_Constantinople_-_Tirgoviste_to_Silistre.jpg)](/File:ZoC_-_Constantinople_-_Tirgoviste_to_Silistre.jpg)
    
    Moving from Tirgoviste to Silistre is only possible due to the Previous Province rule since the Return Province is in Constantinople.
    

### Ship rule\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=10 "Edit section: Ship rule") | [edit source](/index.php?title=Zone_of_control&action=edit&section=10 "Edit section: Ship rule")\]

You can always move to a transport ship in an adjacent sea tile.

*   [![](/images/thumb/b/bd/ZoC_-_Nigbolu_-_Selenik_to_Aegean_Sea.jpg/485px-ZoC_-_Nigbolu_-_Selenik_to_Aegean_Sea.jpg)](/File:ZoC_-_Nigbolu_-_Selenik_to_Aegean_Sea.jpg)
    
    Moving to the ship in the Aegean Sea is only possible due to the Ship rule since the Return Province is in Nigbolu.
    

### Fort rule\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=11 "Edit section: Fort rule") | [edit source](/index.php?title=Zone_of_control&action=edit&section=11 "Edit section: Fort rule")\]

Moving to any non-neutral fort is possible if

*   you are _not_ on a fort controlled by an enemy, _or_
*   the target fort is directly adjacent to the Return Province or is the Return Province.

*   [![](/images/thumb/f/fc/ZoC_-_Constantinople_-_Silistre_to_Tirgoviste.jpg/376px-ZoC_-_Constantinople_-_Silistre_to_Tirgoviste.jpg)](/File:ZoC_-_Constantinople_-_Silistre_to_Tirgoviste.jpg)
    
    Can move from Silistre to the fort in Tirgoviste even though the Return Province is at Constantinople and separate by ZoC provinces Edirne and Kirkkilise
    
*   [![](/images/thumb/c/cc/ZoC_-_Nigbolu_-_to_Constantinople_with_Fort.jpg/679px-ZoC_-_Nigbolu_-_to_Constantinople_with_Fort.jpg)](/File:ZoC_-_Nigbolu_-_to_Constantinople_with_Fort.jpg)
    
    Moving to Constantinople is only possible due to the Fort rule since the Return Province is in Nigbolu (and you can't just move to non-ZoC provinces behind ZoC)
    
*   [![](/images/thumb/a/a4/ZoC_-_Lutzelburg_-_Barrois_to_Rethel.jpg/514px-ZoC_-_Lutzelburg_-_Barrois_to_Rethel.jpg)](/File:ZoC_-_Lutzelburg_-_Barrois_to_Rethel.jpg)
    
    Can move from the fort in Barrois to the fort in Rethel because the fort in Rethel is adjacent to Return Province Lützelburg.
    
*   [![](/images/thumb/e/e7/ZoC_-_Cote_Azur_-_Avignon_to_Provence.jpg/396px-ZoC_-_Cote_Azur_-_Avignon_to_Provence.jpg)](/File:ZoC_-_Cote_Azur_-_Avignon_to_Provence.jpg)
    
    Can move from the fort in Avignon to the fort in Provence because the latter is adjacent to Return Province Cote d'Azur.
    

#### Where the fort rule does NOT apply\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=12 "Edit section: Where the fort rule does NOT apply") | [edit source](/index.php?title=Zone_of_control&action=edit&section=12 "Edit section: Where the fort rule does NOT apply")\]

*   [![](/images/thumb/c/c2/ZoC_-_Nigbolu_-_to_Constantinople_after_deleting_Fort.jpg/762px-ZoC_-_Nigbolu_-_to_Constantinople_after_deleting_Fort.jpg)](/File:ZoC_-_Nigbolu_-_to_Constantinople_after_deleting_Fort.jpg)
    
    Can no longer move to Constantinople after deleting the fort there and moving the capital away, since the Return Province is in Nigbolu and you can't just move to non-ZoC provinces behind ZoC.
    
*   [![](/images/thumb/e/ec/ZoC_-_Nigbolu_-_Edirne_to_Selanik.jpg/590px-ZoC_-_Nigbolu_-_Edirne_to_Selanik.jpg)](/File:ZoC_-_Nigbolu_-_Edirne_to_Selanik.jpg)
    
    Cannot directly move from the fort in Edirne to the fort in Selanik because the latter is not adjacent to Return Province Nigbolu.
    
*   [![](/images/thumb/7/7f/ZoC_-_Ligurian_Sea_-_Avignon_to_Provence.jpg/539px-ZoC_-_Ligurian_Sea_-_Avignon_to_Provence.jpg)](/File:ZoC_-_Ligurian_Sea_-_Avignon_to_Provence.jpg)
    
    Cannot directly move from the fort in Avignon to the fort in Provence because the latter is not adjacent to Return Province Ligurian Sea.
    
*   [![](/images/thumb/e/e7/ZoC_-_Distances_from_Return_Province_Vidin.jpg/422px-ZoC_-_Distances_from_Return_Province_Vidin.jpg)](/File:ZoC_-_Distances_from_Return_Province_Vidin.jpg)
    
    Cannot directly move from Üsküp to the capital fort in Lezhë using the fort rule because it is not a non-neutral fort
    

### ZoC rule\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=13 "Edit section: ZoC rule") | [edit source](/index.php?title=Zone_of_control&action=edit&section=13 "Edit section: ZoC rule")\]

From a ZoC province you can always directly move to any province without a non-neutral fort that is one of

*   the Return Province
*   adjacent to the Return Province
*   adjacent to a militarily accessible non-ZoC province that is adjacent to the Return Province

i.e. any province with distance from the Previous Province as previously defined up to 2.

It doesn't matter whether there is a blocked strait in the path from the Return Province to the target province (but of course they matter in the movement itself).

It doesn't matter whether you have military access or not to the Return Province, and you can even move to it if you don't have military access to it (but you need access to the target province and the intermediate one in the path, if any).

*   [![](/images/thumb/d/df/ZoC_-_Nigbolu_-_Filibe_to_Sofya.jpg/717px-ZoC_-_Nigbolu_-_Filibe_to_Sofya.jpg)](/File:ZoC_-_Nigbolu_-_Filibe_to_Sofya.jpg)
    
    Movement between Filibe and Sofya is possible because Sofya is adjacent to Return Province Nigbolu.
    
*   [![](/images/thumb/d/d1/ZoC_-_Vidin_with_Serbia_-_Sofya_to_Uskup.jpg/486px-ZoC_-_Vidin_with_Serbia_-_Sofya_to_Uskup.jpg)](/File:ZoC_-_Vidin_with_Serbia_-_Sofya_to_Uskup.jpg)
    
    Movement between Sofya and Üsküp (with access to Serbia) is possible because Üsküp is at distance 2 from Return Province Vidin (through Nis).
    
*   [![](/images/thumb/f/f0/ZoC_-_Kosovo_without_access_to_Serbia_-_Uskup_to_Kosovo.jpg/377px-ZoC_-_Kosovo_without_access_to_Serbia_-_Uskup_to_Kosovo.jpg)](/File:ZoC_-_Kosovo_without_access_to_Serbia_-_Uskup_to_Kosovo.jpg)
    
    It's still possible to move back to Return Province Kosovo even after revoking military access to Serbia and thus not having military access there.
    
*   [![](/images/thumb/a/a7/ZoC_-_Aegean_Sea_-_Mentesha_to_Morea.jpg/508px-ZoC_-_Aegean_Sea_-_Mentesha_to_Morea.jpg)](/File:ZoC_-_Aegean_Sea_-_Mentesha_to_Morea.jpg)
    
    It's possible to move all along the coast from Mentesha to Morea, because all those provinces are adjacent to Return Province Aegean Sea, and the forts in the path are adjacent to Return Province Aegean Sea (the Fort rule applies when moving into the forts)
    
*   [![](/images/thumb/b/b8/ZoC_-_Panay_-_Manila_to_Bikol.jpg/407px-ZoC_-_Panay_-_Manila_to_Bikol.jpg)](/File:ZoC_-_Panay_-_Manila_to_Bikol.jpg)
    
    It's possible to move to Bikol from Manila because it is at distance 2 from Return Province Panay via Visayas, even though there are two blocked straits in the way
    

#### Where the ZoC rule does NOT apply\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=14 "Edit section: Where the ZoC rule does NOT apply") | [edit source](/index.php?title=Zone_of_control&action=edit&section=14 "Edit section: Where the ZoC rule does NOT apply")\]

*   [![](/images/thumb/c/cd/ZoC_-_Nigbolu_-_Sofya_to_Uskup.jpg/624px-ZoC_-_Nigbolu_-_Sofya_to_Uskup.jpg)](/File:ZoC_-_Nigbolu_-_Sofya_to_Uskup.jpg)
    
    Movement between Sofya and Üsküp (without access to Serbia) is impossible because there is no path from Return Province Nigbolu to Üsküp that doesn't pass through a ZoC province or an inaccessible province
    
*   [![](/images/thumb/b/b8/ZoC_-_Distances_from_Return_Province_Nigbolu.jpg/629px-ZoC_-_Distances_from_Return_Province_Nigbolu.jpg)](/File:ZoC_-_Distances_from_Return_Province_Nigbolu.jpg)
    
    Movement between Sofya and Üsküp with access to Serbia is only possible indirectly because Üsküp is at distance 3 from Return Province Nigbolu (through Vidin and Nis).
    
*   [![](/images/thumb/c/cb/ZoC_-_Vidin_with_Serbia_-_Uskup_to_Kesriye.jpg/435px-ZoC_-_Vidin_with_Serbia_-_Uskup_to_Kesriye.jpg)](/File:ZoC_-_Vidin_with_Serbia_-_Uskup_to_Kesriye.jpg)
    
    Movement between Üsküp and Kesriye with access to Serbia (but without access to Albania) is impossible because there is no path from Return Province Vidin to Kesriye that doesn't pass through a ZoC province.
    
*   [![](/images/thumb/e/e7/ZoC_-_Distances_from_Return_Province_Vidin.jpg/422px-ZoC_-_Distances_from_Return_Province_Vidin.jpg)](/File:ZoC_-_Distances_from_Return_Province_Vidin.jpg)
    
    Movement between Üsküp and Kesriye with access to Serbia and Albania is only possible indirectly because Kesriye is at distance 5 from Return Province Vidin (through Nis, Kosovo, Lezhë and Avlonya). It's also impossible to move directly to Lezhë rather than via Kosovo because it's at distance 3 and it's not a non-neutral fort.
    
*   [![](/images/thumb/7/71/ZoC_-_Gulf_of_Satalia_-_Mentesha_to_Biga.jpg/372px-ZoC_-_Gulf_of_Satalia_-_Mentesha_to_Biga.jpg)](/File:ZoC_-_Gulf_of_Satalia_-_Mentesha_to_Biga.jpg)
    
    When the Return Province is Gulf of Satalia instead of Aegean Sea, it is no longer possible to move from Mentesha all along to Morea, but only to Aydyn, since the provinces are not reachable without passing through ZoC provinces.
    
*   [![](/images/thumb/6/6d/ZoC_-_Vidin_with_Bosniac_Zeta_and_access_to_Albania_and_Bosnia_and_Hungary_-_Uskup_to_Lezhe.jpg/450px-ZoC_-_Vidin_with_Bosniac_Zeta_and_access_to_Albania_and_Bosnia_and_Hungary_-_Uskup_to_Lezhe.jpg)](/File:ZoC_-_Vidin_with_Bosniac_Zeta_and_access_to_Albania_and_Bosnia_and_Hungary_-_Uskup_to_Lezhe.jpg)
    
    After having given Bosnia ownership of Zeta via a peace deal, getting access to Serbia and moving to Üsküp from Return Province Vidin, revoking access to Serbia, getting access from Hungary, Albania and Bosnia, it's not possible to move from Üsküp to Lezhë, because even though the distance to Lezhë from Return Province Nigbolu is now lower than the distance from Üsküp (by passing through Hungary), that distance is greater than 2.
    

Important consequences of the movement rules\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=15 "Edit section: Important consequences of the movement rules") | [edit source](/index.php?title=Zone_of_control&action=edit&section=15 "Edit section: Important consequences of the movement rules")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

Note that these are almost certainly unintended, and so the rules may hopefully be changed in a future patch to remove these dubious properties of the current system.

### A→C via B being allowed does not imply A→B→C being allowed\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=16 "Edit section: A→C via B being allowed does not imply A→B→C being allowed") | [edit source](/index.php?title=Zone_of_control&action=edit&section=16 "Edit section: A→C via B being allowed does not imply A→B→C being allowed")\]

Unfortunately, in the current ruleset, it is sometimes possible that, with A being a non-ZoC province, you can move from A to C with a single movement command resulting in a path passing through B, but that you can't move from A to C with two movement command from A→B and B→C.

The reason for this is that the Return Province is only updated when leaving a non-ZoC province (and not when entering it), but indirect movement commands are computed without updating the Return Province. This means that whether B→C is allowed will be evaluated with Return Province A if you first move to B (because you left it), but will be evaluated with whatever Return Province the unit had as it reached A if you directly move to C.

This can result in suprising behavior and being trapped beyond sieged forts if you move your sieging units incorrectly, as described later.

*   [![](/images/thumb/3/3b/ZoC_-_Constantinople_-_Kirkkilise_to_Silistre.jpg/521px-ZoC_-_Constantinople_-_Kirkkilise_to_Silistre.jpg)](/File:ZoC_-_Constantinople_-_Kirkkilise_to_Silistre.jpg)
    
    The 4k stack can move to Silistre via land because it has just come off the ship and thus has Return Province Gulf of Varna, which is adjacent to Silistre. The other two units instead left Constantinople after unloading from the ship and thus have Return Province Constantinople, and cannot move to Silistre via land
    
*   [![](/images/thumb/1/16/ZoC_-_Severia_-_Perayaslav_to_Czerkasy.jpg/401px-ZoC_-_Severia_-_Perayaslav_to_Czerkasy.jpg)](/File:ZoC_-_Severia_-_Perayaslav_to_Czerkasy.jpg)
    
    After sieging down the fort in Severia, the 6k unit was moved to Czerkasy with a single command, which was allowed based on Return Province Czerkasy, while the 13k unit was first moved to Perayaslav and is now trapped in the enemy territory because its Return Province is now set to Severia. It needs to be rescued using Reorganize Units as described in the part of the article that deals with being trapped after sieging.
    

### Pathfinding does not find the shortest path and depends on the Return Province\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=17 "Edit section: Pathfinding does not find the shortest path and depends on the Return Province") | [edit source](/index.php?title=Zone_of_control&action=edit&section=17 "Edit section: Pathfinding does not find the shortest path and depends on the Return Province")\]

Pathfinding does not update the Return Province when pathfinding, which means that it will not consider all paths that can be performed step by step, and for example will never choose a path that moves between two ZoC provinces without forts that are far away, even though such a path might be possible if performed step by step.

Thus, pathfinding can depend on where the unit comes from, even when in a non-ZoC province, as shown in the following example.

*   [![](/images/thumb/6/66/ZoC_-_Branicevo_to_Uskup.jpg/382px-ZoC_-_Branicevo_to_Uskup.jpg)](/File:ZoC_-_Branicevo_to_Uskup.jpg)
    
    Two units in Branicevo find different paths to Üsküp! This is because one has its Return Province set to Torontal and the other has it set to Nis (since they came from those provinces). The one with Return Province set to Torontal can't consider moving from Sofya to Üsküp because Üsküp is at distance 3 from Torontal.
    

Other consequences of the movement rules\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=18 "Edit section: Other consequences of the movement rules") | [edit source](/index.php?title=Zone_of_control&action=edit&section=18 "Edit section: Other consequences of the movement rules")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

### Clearing misconceptions\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=19 "Edit section: Clearing misconceptions") | [edit source](/index.php?title=Zone_of_control&action=edit&section=19 "Edit section: Clearing misconceptions")\]

*   It is not true that you can always move from a ZoC to a non-ZoC province.
*   It is not true that you can never move from a province next to a fort to another province next to a fort.
*   It is not true that you can never move between enemy forts. You can do so if both are adjacent to the Return Province.
*   You cannot move beyond ZoC even to your own territory, unless you have a fort (including just a capital fort) there and you are moving from a province without an enemy fort
*   Recently unmothballed forts with 0 garrison still project ZoC (but they can be sieged in one tick like an unfortified province)

### Miscellanous considerations\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=20 "Edit section: Miscellanous considerations") | [edit source](/index.php?title=Zone_of_control&action=edit&section=20 "Edit section: Miscellanous considerations")\]

*   Movement, except for movement on provinces containing a fort, only depends on whether a province is within the ZoC of a fort, but it doesn't depend on the actual position of the forts or whether fort ZoCs overlap or not
*   Building new forts never makes more provinces accessible to the enemy, except possibly for the new fort province itself, if it is next to an enemy-reachable ZoC province without a fort
*   A "ring" of ZoC provinces will make any contained province inaccessible (even if it's non-ZoC) unless it's a fort adjacent to a province of the outer border that doesn't contain a fort
*   It's best to move into ZoC territory from a non-ZoC province that is equally distant to many ZoC provinces as opposed to moving from a province that is "off to a side", so that you can move more directly in the ZoC territory
*   It may be best to do an amphibious landing into a ZoC province as opposed to into a non-ZoC province if the sea tile is adjacent to many ZoC provinces as you can then freely move between the ZoC provinces on the coast since your Return Province remains set to the sea tile

### Combining units\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=21 "Edit section: Combining units") | [edit source](/index.php?title=Zone_of_control&action=edit&section=21 "Edit section: Combining units")\]

As described in the rules, if when selecting multiple units the desired Return Province is shown, you can just use the Merge button to combine them.

Otherwise, if you have more than two armies to combine, first merge all the armies other than the one with the desired Return Province.

Then, unless both units have general and are in hostile territory, you can use the Reorganize Units button instead of the Merge Button to move all regiments into the unit whose Return Province you want to use.

If both units have a general and you are in hostile territory, then you can create a new unit with one regiment from any unit with at least 2 regiments and then use Reorganize Units to move all the regiments (and general) from the unit with the undesired Return Province to the newly created unit. Now that newly created unit should be last in the list, and thus merging should result in the desired Return Province.

In case you have exactly two armies with exactly one regiment each and both with leaders in hostile territory, there doesn't seem to be any way to combine the units with the Return Province being set to the Return Province of the second unit in the list other than editing the save file by swapping the "previous\_war" values of the two armies, loading it and merging them.

### Rings/barriers of ZoC provinces and defending with them\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=22 "Edit section: Rings/barriers of ZoC provinces and defending with them") | [edit source](/index.php?title=Zone_of_control&action=edit&section=22 "Edit section: Rings/barriers of ZoC provinces and defending with them")\]

In general a "ring"/"barrier" of ZoC provinces (somewhat more formally, consider, for each connected component of ZoC provinces, the ones that are reachable from any province far away passing only by non-ZoC provinces) will prevent passage from outside to inside and from inside to outside, with the exception of fort directly adjacent to a ZoC province of the ring that doesn't itself contain a fort.

This means that if all the provinces on the border of your country are in the ZoC of a fort, regardless of the exact fort layout, it will be impossible to reach the inside of your country without sieging forts first, no matter where the enemy comes from or how it moves.

This can be used to make sure your standing army cannot be immediately wiped out and give you time to use those unreachable interior provinces to train mercenaries non-stop until your overall army is bigger and then relieve the siege with guaranteed defender bonuses in combat (this means it's best to place forts in defensive terrain). Without such a fort setup, an enemy with a superior army could instead invade, immediately reach and wipe out your army, and then carpet siege all provinces to guarantee a 100% warscore victory.

Of course forts have expensive maintenance, so this strategy is only optimal if you expect an alliance of enemies with an army superior to yours to declare a surprise war, and if the forts would be less expensive that simply getting a large enough standing army, possibly involving paying for being over the force limit and/or paying for standing mercenaries.

If you don't form such a ring of ZoC provinces (as well as natural barriers like other countries that won't give military access to the enemy and that are fortified themselves, or the sea if you are sure you will have naval superiority), forts will not make any part of your country inaccessible. However, they can still slow down the enemy and possibly cause him to split its forces, as well as preventing the ZoC provinces from being asked for in a peace deal if the fort has not been sieged.

### Attacking rings/barriers of ZoC provinces and getting trapped in them\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=23 "Edit section: Attacking rings/barriers of ZoC provinces and getting trapped in them") | [edit source](/index.php?title=Zone_of_control&action=edit&section=23 "Edit section: Attacking rings/barriers of ZoC provinces and getting trapped in them")\]

When you are the attacker, you run the risk of getting trapped behind rings or barriers of ZoC provinces if you don't move your units very carefully.

In particular, if you siege down a inner redundant fort without other nearby forts, such that there is still a ring of ZoC provinces enclosing an interior region after sieging the fort and that the fort you sieged is now in that interior, you run the risk of being trapped.

If after such a siege you move either to an inside non-ZoC province, or to a province on the ring of ZoC provinces, your Return Province will be reset to the fort, which means that you are now "considered inside" the ring and won't be able to get out normally.

If however you directly, with a SINGLE movement command, move to the outside by right clicking on an outside non-ZoC province, you will be able to get there, because sieging down a fort does not reset the Return Province, which will still be on the outside.

If you make a mistake and get your units trapped, you can still usually move them to a ZoC province on the ring and have them meet up with a unit coming from the outside (such as a single mercenary infantry regiment; note that you must build it in an outside non-ZoC province and move it to the ZoC province, not build it directly in an occupied ZoC province on the ring, as it then won't be able to move at all except to a nearby fort or ship!). You can then follow the advice in [Combining units](#Combining_units) on how to use the Reorganize Units feature to combine these two units in a way that results in a unit that can move back outside where your "liberating unit" came from.

In addition to that, if both a unit of yours and its Return Province is next to an enemy fort you occupied and the enemy sieges it back, the Return Province will be reset as it becomes ZoC again and your unit will be in a ZoC province, meaning that the ZoC rule will not apply and you will only be able to move the unit to a nearby enemy fort, to a transport ship or to the Previous Province, unless you rescue it by combining units (if the province is still reachable by any of your other units).

Thus, if you need to park a unit in such a position, it may be smart to make sure you moved it to the province from a province that won't become ZoC as a result of the enemy resieging forts, so that you can go back there.

Reproducing the screenshots\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=24 "Edit section: Reproducing the screenshots") | [edit source](/index.php?title=Zone_of_control&action=edit&section=24 "Edit section: Reproducing the screenshots")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.28.

To reproduce the screenshots, start in normal mode and use the "god", "yesman", "winwars" and "fast\_diplo" and "ai" console commands. Make sure that enemy forts are not mothballed unless you want to test how they behave when mothballed. To siege forts more quickly, use "leader 99 99 99 99" to get a 99 siege general. Use the "tag" command to switch to other countries and then the "ai" command to again disable the AI of the country you switched from.

The screenshots are produced by starting and declaring war in one of these ways:

*   Byzantium vs Ottomans in 1444
*   Austria vs France in 1792
*   Commonwealth vs Russia in 1792. You need to tag switch to Russia, make peace and delete the fort in Kursk and build one in Severia.
*   Maguindanao vs Spain in 1792. You need to tag switch to Spain and build a fort in Tondo and some ships in nearby provinces to block the straits.

See also\[[edit](/index.php?title=Zone_of_control&veaction=edit&section=25 "Edit section: See also") | [edit source](/index.php?title=Zone_of_control&action=edit&section=25 "Edit section: See also")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   Video guide by _Reman's Paradox_: [Guide to Fort Zone of Control Mechanics](https://www.youtube.com/watch?v=x3KqmV_9-bA)

**

Mechanics

**

*   [War](javascript:void(0); "War")
*   [Economy](javascript:void(0); "Economy")
*   [External relations](javascript:void(0); "External relations")
*   [Internal country management](javascript:void(0); "Internal country management")
*   [Meta](javascript:void(0); "Meta")
*   [Technology](javascript:void(0); "Technology")

Declaring war

[Alliance](/Alliance "Alliance") • [Casus belli](/Casus_belli "Casus belli") • [Claim](/Claim "Claim") • [Peace](/Peace "Peace") • [War exhaustion](/War_exhaustion "War exhaustion") • [Warfare](/Warfare "Warfare")

Defense

[Fort](/Fort "Fort") • Zone of control

Land warfare

[Army](/Army "Army") • [Condottieri](/Condottieri "Condottieri") • [Discipline](/Discipline "Discipline") • [Drilling](/Drilling "Drilling") • [Land units](/Land_units "Land units") • [Land warfare](/Land_warfare "Land warfare") • [Manpower](/Manpower "Manpower") • [Militarisation](/Militarisation "Militarisation") • [Mercenaries](/Mercenaries "Mercenaries") • [Professionalism](/Professionalism "Professionalism")

Naval warfare

[Flagship](/Flagship "Flagship") • [Naval blockade](/Naval_warfare#Blockading "Naval warfare") • [Naval doctrine](/Naval_doctrine "Naval doctrine") • [Naval units](/Naval_units "Naval units") • [Naval warfare](/Naval_warfare "Naval warfare") • [Navy](/Navy "Navy") • [Sailors](/Sailors "Sailors")

Other

[Force limit](/Force_limit "Force limit") • [Military leader](/Military_leader "Military leader") • [Military tradition](/Military_tradition "Military tradition")

Colonisation

[Exploration](/Discovery "Discovery") • [Colonisation](/Colonisation "Colonisation") • [Colonial nation](/Colonial_nation "Colonial nation") • [Tariffs](/Tariffs "Tariffs") • [Trade company](/Trade_company "Trade company")

Economy

[Debase currency](/Debase_currency "Debase currency") • [Development](/Development "Development") • [Economy](/Economy "Economy") • [Privateering](/Privateering "Privateering") • [Production](/Production "Production") • [Raid coasts](/Raid_coasts "Raid coasts") • [Tax](/Tax "Tax")

Trade

[Trade](/Trade "Trade") • [Trade company](/Trade_company "Trade company") • [Trade goods](/Trade_goods "Trade goods") • [Trade nodes](/Trade_nodes "Trade nodes")

Diplomacy

[Diplomacy](/Diplomacy "Diplomacy") • [Diplomatic feedback](/Diplomatic_feedback "Diplomatic feedback") • [Envoy](/Envoy "Envoy") • [Espionage](/Espionage "Espionage")

Other

[Defender of the Faith](/Defender_of_the_Faith "Defender of the Faith") • [Great power](/Great_power "Great power") • [Hegemon](/Hegemon "Hegemon") • [Prestige](/Prestige "Prestige") • [Regions](/Regions "Regions")

Political structures

[Emperor of China](/Emperor_of_China "Emperor of China") • [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") • [Papacy](/Papacy "Papacy")

Relations

[Personal union](/Personal_union "Personal union") • [Relations](/Relations "Relations") • [Subject nation](/Subject_nation "Subject nation")

Concepts

[Corruption](/Corruption "Corruption") • [Governing capacity](/Governing_capacity "Governing capacity") • [Overextension](/Overextension "Overextension") • [Power projection](/Power_projection "Power projection") • [Rebellion](/Rebellion "Rebellion") • [Regions](/Regions "Regions") • [Stability](/Stability "Stability") • [States and territories](/States_and_territories "States and territories")

Court

[Advisors](/Advisors "Advisors") • [Consort](/Consort "Consort") • [Monarch power](/Monarch_power "Monarch power") • [National focus](/National_focus "National focus") • [Ruler](/Ruler "Ruler") • [Ruler personalities](/Ruler_personalities "Ruler personalities")

Estates and Factions

[Base estates](/Base_estates "Base estates") • [Cossacks estates](/Cossacks_estates "Cossacks estates") • [Dharma estates](/Dharma_estates "Dharma estates") • [Estates](/Estates "Estates") • [Factions](/Factions "Factions")

Events and Missions

[Decisions](/Decisions "Decisions") • [Disasters](/Disasters "Disasters") • [Events](/Events "Events") • [List of decisions](/List_of_decision_lists "List of decision lists") • [Missions](/Missions "Missions")

Goverment

[Absolutism](/Absolutism "Absolutism") • [Culture](/Culture "Culture") • [Government](/Government "Government") • [Government rank](/Government#Government_rank "Government") • [Modifiers](/Modifiers "Modifiers") • [Policies](/Policies "Policies")

Province mechanics

[Autonomy](/Autonomy "Autonomy") • [Buildings](/Buildings "Buildings") • [Canal](/Canal "Canal") • [Capital](/Capital "Capital") • [Core](/Core "Core") • [Province](/Province "Province")

Religions

[Christian denominations](/Christian_denominations "Christian denominations") • [Eastern denominations](/Eastern_denominations "Eastern denominations") • [Muslim denominations](/Muslim_denominations "Muslim denominations") • [Other denominations](/Additional_denominations "Additional denominations") • [Pagan denominations](/Pagan_denominations "Pagan denominations") • [Religion](/Religion "Religion")

Specific governments

[Native council](/Native_council "Native council") • [Parliament](/Parliament "Parliament") • [Steppe hordes](/Steppe_hordes "Steppe hordes")

Customization

[Nation designer](/Nation_designer "Nation designer") • [Random New World](/Random_New_World "Random New World")

Other

[Achievements](/Achievements "Achievements") • [Luck](/Luck "Luck") • [Score system](/Score_system "Score system")

Ideas and Policies

[Idea groups](/Idea_groups "Idea groups") • [National ideas](/National_ideas "National ideas") • [Policies](/Policies "Policies")

Ages and Institutions

[Ages](/Ages "Ages") • [Institutions](/Institutions "Institutions")

Innovativeness and Technology

[Innovativeness](/Innovativeness "Innovativeness") • [Technology](/Technology "Technology")

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Zone\_of\_control&oldid=150574](https://eu4.paradoxwikis.com/index.php?title=Zone_of_control&oldid=150574)"

[Categories](/Special:Categories "Special:Categories"):

*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.28](/Category:1.28 "Category:1.28")
*   [Expand](/Category:Expand "Category:Expand")
*   [Military](/Category:Military "Category:Military")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")