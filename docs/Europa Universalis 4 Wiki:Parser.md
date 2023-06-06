Europa Universalis 4 Wiki:Parser
================================

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

The **Parser** is a tool created by [Meneth](/Meneth "Meneth") in order to extract information about EU4 from the game-files themselves and turn the information into a human-readable format. Currently there's full support for parsing [decision](/Decision "Decision") files, [policy](/Policy "Policy") files (every decision and policy on the decision and policy pages is Parser output), and [event](/Event "Event") files, and partial support for [mission](/Mission "Mission") files. The countryParser.py file converts all countries in the game to a wiki-table with no header info or closing tag, the output can be seen on the [country list](/Country_list "Country list") page.

Contents
--------

*   [1 Setup](#Setup)
    *   [1.1 Settings](#Settings)
*   [2 Structure](#Structure)
*   [3 Feedback](#Feedback)
    *   [3.1 Known issues](#Known_issues)

Setup\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:Parser&action=edit&section=1 "Edit section: Setup")\]
---------------------------------------------------------------------------------------------------------------------

1.  [Download](https://github.com/Meneth/parser) and extract the Parser. The full source code of the parser is also available here
2.  Edit the settings.txt file to point to your EU4 folder
3.  Run the parser.py file

If step 3 fails, you might have to install [Python](http://python.org/) 3.3. On a Mac OSX or Linux system, you'll need to replace the lines marked '-' with the ones marked '+' in parser.py according to [this diff file](http://pastebin.com/KfTN1JM6).

Note that it is in development, so there may be bugs in it. The output will appear in the output folder.

### Settings\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:Parser&action=edit&section=2 "Edit section: Settings")\]

There are currently four settings:

1.  path: This must always be the path to your EU4 folder. Anything else will cause the parser to fail
2.  folder: This is the folder you want to parse. Decisions, missions, and events are accepted
3.  file: This is the file you want to parse. No .txt extension should be added at the end. Put "no" to parse all the files in the folder. When parsing a single file the output will also be printed to the console
4.  policy: If set to 'yes' and the 'folder'-setting points to the policies folder('common\\policies' by default) then the parser will generate the [policy-table](/Policies "Policies") used on this wiki.

Structure\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:Parser&action=edit&section=3 "Edit section: Structure")\]
-----------------------------------------------------------------------------------------------------------------------------

The Parser is built in Python. Nearly all [localisation](/Localisation "Localisation") happens via the import of a number of files as dictionaries; both localisation files from the game folders themselves, and files distributed with the parser itself containing dictionaries of identifiers ([commands](/Effects "Effects"), [scopes](/Scopes "Scopes"), and [conditions](/Conditions "Conditions"), hereafter simply called "commands") and their human-readable version.

The Parser goes through a game-file line by line, splitting lines at every bracket and splitting apart lines with more than one command or condition on them. This is output to a temporary file (temp.txt) which is then parsed line by line. For each line, the level of nesting is determined, and the command/condition/scope and value are each extracted using regular expressions. The Parser checks if conditions are true or false, and if so \_false is appended to the condition so that the correct version will be looked up in the dictionaries.

The value is turned into natural text by comparing them to a number of vanilla localisation files, and a value type is assigned so that commands with alternate versions based on the type (such as add\_claim = province vs add\_claim = country) can be correctly localised. This value is then inserted into the string associated with the command used, and the result output to a file in the output folder with the same name as the input file.

The Parser handles non-standard coding such as commands that span multiple lines (add\_x\_modifier being one example) partly in the code itself rather than depending entirely on the definition files, as in some cases one would have to create a dictionary for only a few values. More common exceptions like integers in some cases referring to provinces rather than just plain numbers are handled by referring to the exceptions.txt file.

Overall the Parser is a rather quick tool; on an average computer it will take it 10 to 15 seconds to parse all the decisions in the game. This will likely increase some when the conditional logic is further extended to support missions and events, but should still remain low.

Feedback\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:Parser&action=edit&section=4 "Edit section: Feedback")\]
---------------------------------------------------------------------------------------------------------------------------

Any feedback related to the Parser can be posted on this page's Talk page. Any feedback is appreciated, regardless of whether it has to do with the code itself or simply the natural language output.

### Known issues\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:Parser&action=edit&section=5 "Edit section: Known issues")\]

Known unlocalised statements:

*   build\_to\_forcelimit

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Europa\_Universalis\_4\_Wiki:Parser&oldid=140569](https://eu4.paradoxwikis.com/index.php?title=Europa_Universalis_4_Wiki:Parser&oldid=140569)"

[Category](/Special:Categories "Special:Categories"):

*   [Wiki](/Category:Wiki "Category:Wiki")