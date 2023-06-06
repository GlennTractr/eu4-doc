Modding
=======

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

This article is [timeless](/Category:Timeless "Category:Timeless") and should be accurate for any version of the game.

**Modding** is a very broad topic. This page serves as a portal to all modding-related pages on the wiki. If you are new to modding, have a look at the [Scripting Tutorial](/Scripting_Tutorial "Scripting Tutorial") for an introduction.

Contents
--------

*   [1 Game data](#Game_data)
*   [2 Tools & utilities](#Tools_.26_utilities)
    *   [2.1 Extensions](#Extensions)
    *   [2.2 General Map/Game Editors](#General_Map.2FGame_Editors)
    *   [2.3 Image Editors](#Image_Editors)
    *   [2.4 3D Modelling Tools](#3D_Modelling_Tools)
    *   [2.5 Other Modding Tools](#Other_Modding_Tools)
*   [3 Miscellaneous](#Miscellaneous)
*   [4 Tips](#Tips)

Game data\[[edit](/index.php?title=Modding&veaction=edit&section=1 "Edit section: Game data") | [edit source](/index.php?title=Modding&action=edit&section=1 "Edit section: Game data")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   [Triggers](/Triggers "Triggers") - Used in order to execute commands/events/decisions/etc. only when certain things are true
*   [Country list](/Country_list "Country list") - Basic info on all countries in the vanilla game, including country tags
*   [Effects](/Effects "Effects") - Used in order to dynamically affect the game
*   [Modifier list](/Modifier_list "Modifier list") - Script modifiers that affect aspects of the game.
*   [Province ID map](https://eu4.paradoxwikis.com//images/c/c9/Province_ID_map.png) (warning: huge)
*   [Province list](/Province_list "Province list") - Province IDs are used in many commands
*   [Scopes](/Scopes "Scopes") - Used to determine what entity commands and conditions are executed and checked from
*   [Variables](/Variables "Variables") - Persistent values that are either associated with a specific country or province.

Tools & utilities\[[edit](/index.php?title=Modding&veaction=edit&section=2 "Edit section: Tools & utilities") | [edit source](/index.php?title=Modding&action=edit&section=2 "Edit section: Tools & utilities")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Extensions\[[edit](/index.php?title=Modding&veaction=edit&section=3 "Edit section: Extensions") | [edit source](/index.php?title=Modding&action=edit&section=3 "Edit section: Extensions")\]

*   [CW Tools for VS Code](https://forum.paradoxplaza.com/forum/index.php?threads/1149270 "forum:1149270") - Provides interactive validation as well as features such as code-completion, localisation generation, and hover info while you write.
*   [Notepad++ Syntax Highlighter](https://forum.paradoxplaza.com/forum/index.php?threads/1056010 "forum:1056010")

### General Map/Game Editors\[[edit](/index.php?title=Modding&veaction=edit&section=4 "Edit section: General Map/Game Editors") | [edit source](/index.php?title=Modding&action=edit&section=4 "Edit section: General Map/Game Editors")\]

*   [Java Save Game Replayer](https://forum.paradoxplaza.com/forum/index.php?threads/722493 "forum:722493")
*   [Clausewitz Scenario Editor](https://forum.paradoxplaza.com/forum/index.php?threads/707474 "forum:707474") - A map-viewing and editing tool with dozens of map modes. Suitable for batch history edits and quickly finding province IDs. Requires Java.
*   [Clausewitz EU4 GUI Mod Editor](https://forum.paradoxplaza.com/forum/index.php?threads/720933 "forum:720933")
*   [EU4 Mod Editing Tool](https://forum.paradoxplaza.com/forum/index.php?threads/1540289 "forum:1540289") - Wiki Page: [EU4 Mod Editing Tool](/EU4_Mod_Editing_Tool "EU4 Mod Editing Tool") - A tool for editing history, map and common files in EU4 with a map display similar to that in the game.

### Image Editors\[[edit](/index.php?title=Modding&veaction=edit&section=5 "Edit section: Image Editors") | [edit source](/index.php?title=Modding&action=edit&section=5 "Edit section: Image Editors")\]

*   [Gimp](https://www.gimp.org/) - A free and open source Photoshop alternative. Great for all types of image editing from simple cropping and resizing, to more complicated tasks like compositing and photo manipulation.
*   [Paint.NET](https://www.getpaint.net/download.html) - A clean and polished basic photo editing tool. It has fewer features overall than Gimp, but what it does do it does very well. Great for getting started.
*   [Krita](https://krita.org/en/) - A free and open source painting program, ideal for creating custom artwork for loading screens and event images.

### 3D Modelling Tools\[[edit](/index.php?title=Modding&veaction=edit&section=6 "Edit section: 3D Modelling Tools") | [edit source](/index.php?title=Modding&action=edit&section=6 "Edit section: 3D Modelling Tools")\]

*   [Blender](https://www.blender.org/) - Free and open source 3D modelling software with tools for modelling, sculpting, texturing, and animating.
*   [io\_pdx\_mesh](https://github.com/ross-g/io_pdx_mesh/releases/latest) - A plugin for Blender and Maya, vital for 3D modelling in EU4. Allows you to import and export Paradox's `.mesh` file format directly, as well as easily work with materials and animations.
*   [JoroDox mod making tool](https://forum.paradoxplaza.com/forum/index.php?threads/831597 "forum:831597") (wiki page: [JoroDox mod making tool](/JoroDox_mod_making_tool "JoroDox mod making tool"))
*   [Clausewitz Maya Exporter](https://forum.paradoxplaza.com/forum/index.php?threads/924764 "forum:924764") - A tool allowing for easier creation of 3D models (units) to use in mods for newer Clausewitz games.

### Other Modding Tools\[[edit](/index.php?title=Modding&veaction=edit&section=7 "Edit section: Other Modding Tools") | [edit source](/index.php?title=Modding&action=edit&section=7 "Edit section: Other Modding Tools")\]

*   [The Validator - Find errors quickly and with minimal pain!](https://forum.paradoxplaza.com/forum/index.php?threads/720987 "forum:720987") (Wiki Page: [The Validator](/The_Validator "The Validator"))
*   [EU4 Province Color Picker](https://forum.paradoxplaza.com/forum/index.php?threads/984905 "forum:984905")
*   [Paradox Node Editor](https://forum.paradoxplaza.com/forum/index.php?threads/1483101 "forum:1483101") - Visual Application for Editing EU4 Missions
*   [Music Mod Creation Tool](https://runite-drill.github.io/music-mod-creation-tool/) - A tool that creates all the files, scripts and folders needed to add music to EU4 and other Paradox Interactive games.
*   [EU4 Localisation Generator](https://github.com/theolaa/EU4-Localisation-Converter/releases/latest/) - This tool lets you write localisation in one language, and then have it duplicated into the other languages. This DOES NOT translate your mod, but it will stop people from complaining about missing localisation when they try to play your mod in an "unsupported" language. Requires Java.
*   [The Modding Git Guide](https://docs.google.com/document/d/1bQdOVMY6FTu-2AKXZblYp6bF2-_W2JMUtXc5a0nZ8Ls) is a community made guide for using Git, GitHub/GitLab, and related tools such as KDiff3. It can be a useful stop for questions beyond this wiki, and contains step by step guides for much of what is talked about here. Though the examples are HOI4 based, the principles apply equally well to any Paradox game mod.
*   [Winmerge](http://winmerge.org//) - A merging tool that lets you solve merge conflits, or simply view differences between different files and folders (e.g. compare a mod's file with vanilla).

Miscellaneous\[[edit](/index.php?title=Modding&veaction=edit&section=8 "Edit section: Miscellaneous") | [edit source](/index.php?title=Modding&action=edit&section=8 "Edit section: Miscellaneous")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   [Checksum](/Checksum#What_affects_the_Checksum "Checksum")

Tips\[[edit](/index.php?title=Modding&veaction=edit&section=9 "Edit section: Tips") | [edit source](/index.php?title=Modding&action=edit&section=9 "Edit section: Tips")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   If you use Microsoft Windows, consider using [Notepad++](http://notepad-plus-plus.org/). Standard Notepad is considerably unreliable when it comes to respecting structure and format, and can bring a bunch of unnecessary headaches.
*   If you use a GNU/Linux distribution, almost any text editor will respect structure and format. Examples of free text editors (or IDEs) that will respect structure and format include gedit, Geany, Atom, Vim, nano and Emacs.
*   If you use Microsoft Windows, make sure your Europa Universalis IV folder is automatically indexed by Windows (right-click on folder, _Properties_, _Advanced Options_), so that, when you search within it, the function can search within text files. When you first enable the setting, you'll have to wait a bit for Windows to do the indexing in the background. (Alternatively, just use Notepad++'s "Find in Files" functionality, which is a lot better than Windows at searching.)
*   When trying to find a way to do something, look around the game's structure to see how the game accomplishes similar things. The previous point helps with that (how is X effect/trigger meant to be used?). It's also a useful technique to learn about proper format, how events, decisions and missions work, and how to balance your changes with the rest of the game.
*   Uncommon/unknown file types outside the _gfx_ folder (i.e. .lua, .gfx, .gui) are usually normal text files, and can be opened as such.
*   Read the Modding section!
*   Save the [List of Effects, Modifiers, Scopes, Triggers, and Localization Strings](https://forum.paradoxplaza.com/forum/index.php?threads/722090 "forum:722090") to a text file(s) for easy access. It's a quick reference to all the gears that make EU4 tick, and there's sometimes usage tips to be found.
*   If all else fails, drop us a question here in the [Quick questions thread](https://forum.paradoxplaza.com/forum/index.php?threads/708855 "forum:708855") over at the official EU4 modding forum.
*   If you use Windows and want to merge mods, you could use [WinMerge](http://winmerge.org//), an easy tool for merging folders and files.
*   To upload a thumbnail with your mod, you must call it "thumbnail.png", it must be 512 x 512 or lower, it must be placed directly in the folder of your mod, and the line 'picture="thumbnail.png"' should be added to the second line of the descriptor.

**Modding**

Documentation

[Effects](/Effects "Effects") • [Triggers](/Triggers "Triggers") • [Modifiers](/Modifier_list "Modifier list") • [Scopes](/Scopes "Scopes") • [Variables](/Variables "Variables") • [Localisation](/Localisation "Localisation") • [Customizable localization](/Customizable_localization "Customizable localization") • [Run files](/Run_files "Run files") • [List of event pictures](/List_of_event_pictures "List of event pictures")

Scripting

[Scripted function](/Scripted_function_modding "Scripted function modding") • [Advisors](/Advisor_modding "Advisor modding") • [Ages](/Age_modding "Age modding") • [Bookmarks](/Scenario_modding "Scenario modding") • [Buildings](/Building_modding "Building modding") • [Casus belli](/Casus_belli_modding "Casus belli modding") • [Colonial regions](/Colonial_regions_modding "Colonial regions modding") • [Countries](/Country_creation "Country creation") • [Culture](/Culture_modding "Culture modding") • [Decisions](/Decision_modding "Decision modding") • [Defines](/Defines "Defines") • [Diplomatic actions](/Diplomatic_action_modding "Diplomatic action modding") • [Disasters](/Disaster_modding "Disaster modding") • [Empire of China](/Empire_of_China_modding "Empire of China modding") • [Estates](/Estate_modding "Estate modding") • [Events](/Event_modding "Event modding") • [Factions](/Faction_modding "Faction modding") • [Government](/Government_modding "Government modding") • [Government Mechanics](/Government_mechanic_modding "Government mechanic modding") • [Great projects](/Great_project_modding "Great project modding") • [History](/History_modding "History modding") • [Holy Roman Empire](/Holy_Roman_Empire_modding "Holy Roman Empire modding") • [Idea groups](/Idea_group_modding "Idea group modding") • [Institutions](/Institutions_modding "Institutions modding") • [Mercenaries](/Mercenaries_modding "Mercenaries modding") • [Missions](/Mission_modding "Mission modding") • [Modifiers](/Modifier_modding "Modifier modding") • [Nation designer](/index.php?title=Nation_designer_modding&action=edit&redlink=1 "Nation designer modding (page does not exist)") • [On Actions](/On_Actions "On Actions") • [Parliament](/Parliament_modding "Parliament modding") • [Peace treaties](/Peace_treaty_modding "Peace treaty modding") • [Policies](/Policy_modding "Policy modding") • [Rebel types](/Rebel_modding "Rebel modding") • [Religion](/Religion_modding "Religion modding") • [Subject types](/Subject_type_modding "Subject type modding") • [Technology](/Technology_modding "Technology modding") • [Trade companies](/Trade_company_modding "Trade company modding") • [Trade goods](/Trade_goods_modding "Trade goods modding") • [Units](/Unit_modding "Unit modding")

Map

[Map](/Map_modding "Map modding") • [Map Modding Quick Reference](/Map_Modding_Quick_Reference "Map Modding Quick Reference") • [Nation designer](/index.php?title=Nation_designer_modding&action=edit&redlink=1 "Nation designer modding (page does not exist)") • [Random New World](/Random_New_World_modding "Random New World modding") • [Trade nodes](/Trade_node_modding "Trade node modding")

Graphics

[3D Models](/Model_modding "Model modding") • [Interface](/Interface_modding "Interface modding") • [Graphical Assets](/Graphical_asset_modding "Graphical asset modding") • [Fonts](/Font_modding "Font modding") • [Particles](/index.php?title=Particle_modding&action=edit&redlink=1 "Particle modding (page does not exist)") • [Shaders](/index.php?title=Shader_modding&action=edit&redlink=1 "Shader modding (page does not exist)") • [Unit models](/Unit_models "Unit models")

Audio

[Music](/Music_modding "Music modding") • [Sound](/Sound_modding "Sound modding")

Other

[Console commands](/Console_commands "Console commands") • [Checksum](/Checksum "Checksum") • [JoroDox mod making tool](/JoroDox_mod_making_tool "JoroDox mod making tool") • [Mod structure](/Mod_structure "Mod structure") • [Troubleshooting](/Mod_troubleshooting "Mod troubleshooting") • [The Validator](/The_Validator "The Validator") • [Run files](/Run_files "Run files")

Guides

[Adding a province](/Province_modding "Province modding") • [Map Modding Quick Reference](/Map_Modding_Quick_Reference "Map Modding Quick Reference") • [Save-game editing](/Save-game_editing "Save-game editing") • [Scripting Tutorial](/Scripting_Tutorial "Scripting Tutorial")

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Modding&oldid=154232](https://eu4.paradoxwikis.com/index.php?title=Modding&oldid=154232)"

[Categories](/Special:Categories "Special:Categories"):

*   [Timeless](/Category:Timeless "Category:Timeless")
*   [Modding](/Category:Modding "Category:Modding")