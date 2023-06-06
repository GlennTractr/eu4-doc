Trade
=====

From Europa Universalis 4 Wiki

(Redirected from [Merchants](/index.php?title=Merchants&redirect=no "Merchants"))

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

Please help with verifying or updating older sections of this article.  
At least some were last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

_This article deals with the trade network and trade income. For information about trade goods and their production and value, see [trade goods](/Trade_goods "Trade goods")._  

_**EU4 Beginner Tutorial #2 - Trade**_. A complete beginner tutorial with _MordredViking_ looking at the mechanics behind the trade system and how you utilize them to build yourself a trade empire.

[![](/images/thumb/5/5f/Trade_nodes.png/600px-Trade_nodes.png)](/File:Trade_nodes.png)

[](/File:Trade_nodes.png "Enlarge")

Trade nodes

[![](/images/thumb/d/d3/Trade_center_map.png/600px-Trade_center_map.png)](/File:Trade_center_map.png)

[](/File:Trade_center_map.png "Enlarge")

Historical centers of trade and other provincial trade power modifiers in 1444.

**Trade** and [production](/Production "Production") of trade goods are two of the three main sources of [income](/Income "Income") for a country, the third being [taxes](/Tax "Tax"). Every province produces [trade goods](/Trade_goods "Trade goods"), which give production income to their owner directly. The trade value of the goods then enters a system of [trade nodes](/Trade_nodes "Trade nodes"), where it is steered and eventually collected by merchants as trade income.

Contents
--------

*   [1 Summary](#Summary)
*   [2 Sources of trade value](#Sources_of_trade_value)
    *   [2.1 Local trade value](#Local_trade_value)
    *   [2.2 Multiple merchant bonus](#Multiple_merchant_bonus)
    *   [2.3 Total trade value](#Total_trade_value)
*   [3 Trade nodes and power](#Trade_nodes_and_power)
    *   [3.1 Relative trade power: competition over trade value](#Relative_trade_power:_competition_over_trade_value)
        *   [3.1.1 Collecting trade](#Collecting_trade)
        *   [3.1.2 Transferring trade](#Transferring_trade)
            *   [3.1.2.1 Pulling trade value forward](#Pulling_trade_value_forward)
            *   [3.1.2.2 Steering trade](#Steering_trade)
*   [4 Sources of trade power](#Sources_of_trade_power)
    *   [4.1 Provincial trade power](#Provincial_trade_power)
    *   [4.2 Provincial trade power modifiers](#Provincial_trade_power_modifiers)
    *   [4.3 Transfers from traders downstream](#Transfers_from_traders_downstream)
    *   [4.4 Trade company](#Trade_company)
    *   [4.5 Protect trade](#Protect_trade)
        *   [4.5.1 Supply range](#Supply_range)
    *   [4.6 Other sources of trade power](#Other_sources_of_trade_power)
*   [5 Merchants](#Merchants)
    *   [5.1 Merchant trade power](#Merchant_trade_power)
    *   [5.2 Trade with no merchant](#Trade_with_no_merchant)
    *   [5.3 Merchant actions](#Merchant_actions)
    *   [5.4 Gaining merchants](#Gaining_merchants)
    *   [5.5 Trade range](#Trade_range)
    *   [5.6 Trade policies](#Trade_policies)
*   [6 Trade modifiers](#Trade_modifiers)
    *   [6.1 Global trade power modifier](#Global_trade_power_modifier)
    *   [6.2 Merchant bonus](#Merchant_bonus)
    *   [6.3 Domestic trade power](#Domestic_trade_power)
    *   [6.4 Trade power abroad](#Trade_power_abroad)
    *   [6.5 Mercantilism](#Mercantilism)
    *   [6.6 Trade steering](#Trade_steering)
    *   [6.7 Caravan power](#Caravan_power)
    *   [6.8 Trade efficiency](#Trade_efficiency)
*   [7 Embargo](#Embargo)
*   [8 Privateering](#Privateering)
    *   [8.1 Hunt pirates](#Hunt_pirates)
*   [9 Strategies](#Strategies)
    *   [9.1 Secure the home node](#Secure_the_home_node)
    *   [9.2 Expand one node after another](#Expand_one_node_after_another)
    *   [9.3 Develop and build](#Develop_and_build)
*   [10 See also](#See_also)
*   [11 References](#References)

Summary\[[edit](/index.php?title=Trade&veaction=edit&section=1 "Edit section: Summary") | [edit source](/index.php?title=Trade&action=edit&section=1 "Edit section: Summary")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The trade system in game can be summarized as follows:

*   **[Trade nodes](/Trade_nodes "Trade nodes")** across the world are connected to form a global network of trade. Each node hosts the trade activity of a group of geographically associated provinces. Money in this global trade network can flow between trade nodes in **unidirectional** trade routes as well as terminate at end nodes. These connections between trade nodes are **fixed** and cannot be altered during the course of play.
*   **[Trade value](#Sources_of_trade_value)** represents the _monthly_ sum of locally produced and incoming trade goods in a trade node. Trade value is generated from the quantity and price of produced [trade goods](/Trade_goods "Trade goods") in each province. All provinces pool their trade value into the total trade value of their associated trade node. The trade tab provides an aggregate trade value in a node while the trade map mode displays a tooltip listing locally produced goods separately from incoming trade good values.
*   **[Trade power](#Trade_nodes_and_power)** is a number representing a country's control over trade in a node. The trade power of a country as a proportion of the total trade power of all countries present in the node determines what will happen to the trade value in each node. Power is used either to _retain_ trade value within the node (if the nation is collecting with a merchant or at its home node), or to _transfer_ it forward in the trade network (if the nation is steering from there with a merchant, or it's not its home node and it has no merchant). Trade power is generated by provinces, [light ships](/Light_ships "Light ships"), and merchants. Certain [ideas](/Ideas "Ideas"), events and modifiers can also affect a country's trade power in a node.
*   **[Merchants](#Merchants)** can be sent to a trade node to _collect_ a portion of the node's trade value proportional to the nation's share of trade power in the node, or _steer_ the node's trade value in a particular direction.

Sources of trade value\[[edit](/index.php?title=Trade&veaction=edit&section=2 "Edit section: Sources of trade value") | [edit source](/index.php?title=Trade&action=edit&section=2 "Edit section: Sources of trade value")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

_See also: [Trade goods](/Trade_goods "Trade goods")_  

[![](/images/thumb/5/57/Krakow_local_trade_value.png/300px-Krakow_local_trade_value.png)](/File:Krakow_local_trade_value.png)

[](/File:Krakow_local_trade_value.png "Enlarge")

The Krakow trade node, showing all sources of local trade value.

All trade income ultimately originates as **provincial trade value**.

### Local trade value\[[edit](/index.php?title=Trade&veaction=edit&section=3 "Edit section: Local trade value") | [edit source](/index.php?title=Trade&action=edit&section=3 "Edit section: Local trade value")\]

The trade value of a province is equal to [![Local goods produced](/images/thumb/b/b3/Local_goods_produced.png/28px-Local_goods_produced.png)](/Goods_produced "Local goods produced") local goods produced × the price of the trade good that the province produces. This value can be seen in the province window. Trade value determines [production](/Production "Production") income, but it is _not_ itself affected by either production efficiency or local autonomy. See [Trade goods § Goods produced](/Trade_goods#Goods_produced "Trade goods") for the details of goods produced; for trade purposes, the most noteworthy modifier is that [![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") merchant republics and [![Subject tradecompany icon.png](/images/thumb/8/8d/Subject_tradecompany_icon.png/28px-Subject_tradecompany_icon.png)](/Trade_company "Trade company") trade companies give a bonus – in _all_ provinces in the node, not just their own – to goods produced proportional to their share of trade power in a node

Trade value can be further increased by a local [![Trade value.png](/images/thumb/f/f9/Trade_value.png/28px-Trade_value.png)](/Trade_value "Trade value") trade value modifier, which is given by certain events:

[![Trade value modifier.png](/images/thumb/4/4d/Trade_value_modifier.png/24px-Trade_value_modifier.png)](/Trade_value "Trade value")

Event modifier

Trigger

ExpandDuration

**+20%**

Controls Tea Trade

Cultural event: “[The Way of Tea](/Cultural_events#The_Way_of_Tea "Cultural events")”

Option: ‘Make it so!’

for the rest of the campaign.

**+10%**

Diamond District

Price change event: “[Faceting](/Price_Change_events#Faceting "Price Change events")”

for the rest of the campaign.

**+10%**

Perfume Capital

Price change event: “[Growth of the Perfume Industry](/Price_Change_events#Growth_of_the_Perfume_Industry "Price Change events")”

for the rest of the campaign.

**+15%**

Regulated Economic Growth

Trade policy event: “Increased Demand for \[trade\_province.GetFancyTradeGood\]”

Option: ‘We should step in to limit any excesses.’

for 10 years.

**+15%**

Unregulated Economic Growth

Trade policy event: “Increased Demand for \[trade\_province.GetFancyTradeGood\]”

Option: ‘Let us lighten regulations to really benefit local entrepreneurs.’

for 10 years.

**−25%**

Caravan Raids

Tribal Federation event: “Stolen \[fancy\_trade\_caravan\_origin.GetFancyTradeGood\]”

Option: ‘We must root out the raiders.’

for 10 years.

**+10%**

Expanding the Markets of Cairo

 [![Flag of Mamluks](/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks")Mamluk Government event: “[The Tarh and the Royal Monopolies](/Mamluk_government_events#The_Tarh_and_the_Royal_Monopolies "Mamluk government events")”

Option: ‘We will just have to endure the cost.’

for 10 years.

The trade value of all provinces in the same trade node is added together to determine the **local trade value** of the node. This can be seen in the node's window, as well as the ledger and the trade tab.

### Multiple merchant bonus\[[edit](/index.php?title=Trade&veaction=edit&section=4 "Edit section: Multiple merchant bonus") | [edit source](/index.php?title=Trade&action=edit&section=4 "Edit section: Multiple merchant bonus")\]

[![](/images/thumb/1/19/Merchant_bonus_tooltip.png/300px-Merchant_bonus_tooltip.png)](/File:Merchant_bonus_tooltip.png)

[](/File:Merchant_bonus_tooltip.png "Enlarge")

Three merchants steering from Krakow to Baltic Sea, each with a merchant bonus. This tooltip is on the outgoing node, but not the steering button.

In addition to steering outgoing trade value through a particular outgoing link (see below), each merchant applies a boost to the trade value on that link—that is, the steered trade value increases by a percentage as it passes between the two nodes, so that the incoming trade value of the downstream node is larger than the corresponding outgoing trade value of the upstream node. This affects all trade on that link, not just the merchant's country, so multiple merchants can boost trade on the same link. The total boost is:

Merchants

Boost

Cumulative

0

0.0%

0.0%

1

+5.0%

+5.0%

2

+2.5%

+7.5%

3

+1.6%

+9.1%

4

+1.2%

+10.3%

5

+1.0%

+11.3%

Having more than five merchants will not increase the boost further. The boost is modified by the country's trade steering: for example, if the first merchant's country has +20% trade steering the boost from the merchant will be increased to +6.0%. The merchant order follow a [scripted order](/Countries#List_of_tags "Countries"), so the merchant with the highest trade steering will not necessarily be first.

### Total trade value\[[edit](/index.php?title=Trade&veaction=edit&section=5 "Edit section: Total trade value") | [edit source](/index.php?title=Trade&action=edit&section=5 "Edit section: Total trade value")\]

The total trade value in a trade node is the sum of _local trade value_ and _incoming trade value_ from upstream trade nodes minus _outgoing trade value_. For details of incoming trade value, see [§ Transferring trade](#Transferring_trade) below.

Trade nodes and power\[[edit](/index.php?title=Trade&veaction=edit&section=6 "Edit section: Trade nodes and power") | [edit source](/index.php?title=Trade&action=edit&section=6 "Edit section: Trade nodes and power")\]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

Each land province in the world belongs to exactly one **[trade node](/Trade_node "Trade node")**. The trade value from a province is added to the node's local trade value. In addition, most nodes have one or more other _incoming nodes_, and one or more other _outgoing nodes_. In this way all nodes are connected in a global network, with a handful (e.g. California, Lhasa, and Great Lakes) being _origin nodes_ with nothing upstream of them, and three (English Channel, Genoa, and Venice) being _end nodes_ with nothing downstream of them.

### Relative trade power: competition over trade value\[[edit](/index.php?title=Trade&veaction=edit&section=7 "Edit section: Relative trade power: competition over trade value") | [edit source](/index.php?title=Trade&action=edit&section=7 "Edit section: Relative trade power: competition over trade value")\]

Nations use [![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") **trade power** to compete in manipulating the flow of trade value in several ways. The absolute amount of trade power is unimportant; what is important is the _relative proportion_ of trade power wielded by a country and others it is cooperating with, compared to all countries it is _competing_ with.

Each country's trade power is increased by their [![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Global_trade_power "Global trade power") global trade power modifier for all uses.

#### Collecting trade\[[edit](/index.php?title=Trade&veaction=edit&section=8 "Edit section: Collecting trade") | [edit source](/index.php?title=Trade&action=edit&section=8 "Edit section: Collecting trade")\]

Each country has a **main trade city**. This is the same as the capital at the start of the game, and usually stays that way. In the trade node that this province belongs to, the country gets an extra [![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") **+5** trade power and automatically collects trade. With the [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations expansion, the main trade city can be changed at the cost of [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") **200** diplomatic power. If the capital and main trade city are the same, moving the capital also moves the main trade city for free.

Countries can also collect trade by sending a [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant") merchant. In this case, the country's trade power is reduced by **−50%**, unless the merchant is sent to the country's main trade city. This is a multiplicative modifier, applied after all other modifiers.[\[1\]](#cite_note-not_main_city-1)

When collecting trade in a node, the country is allocated a portion of the node's trade value equal to:

![{\displaystyle {\text{Collected value}}=({\text{Incoming value}}+{\text{Local value}})\times {\frac {\text{Trade power in node}}{\text{Total effective trade power in node}}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/53560386d3fabebb1c2a9b926d03414e8b483a2f)

The _effective trade power_ in a node only counts the trade power of the countries which collect or which transfer downstream, but it doesn't count the countries which have their trade capital upstream.

This amount is then multiplied by 1 + the country's [![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/28px-Trade_efficiency.png)](/Trade_efficiency "Trade efficiency") trade efficiency:

![{\displaystyle {\text{Earned value}}={\text{Collected value}}\times \left[{\text{max}}\left(1+\sum {\text{trade efficiency modifiers excluding from merchant present}},1\%\ \right)+10\%\ \left({\text{From merchant present}}\right)\right]}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/6ca67aefe8d1427fd62c3fef635ed19946710f66)

And this amount, ![{\displaystyle {\text{Earned value}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/55404a4d5c815e7c71e9cf985a5db0e31816104c), is the number of [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") ducats actually added to the country's treasury as trade income, visible in a trade node's screen as the string: _"We earn x.xx here."_

Each country collecting trade competes with all other countries collecting trade _and_ all countries transferring trade.

#### Transferring trade\[[edit](/index.php?title=Trade&veaction=edit&section=9 "Edit section: Transferring trade") | [edit source](/index.php?title=Trade&action=edit&section=9 "Edit section: Transferring trade")\]

[![](/images/thumb/4/48/Trade_transfer_tooltip.png/300px-Trade_transfer_tooltip.png)](/File:Trade_transfer_tooltip.png)

[](/File:Trade_transfer_tooltip.png "Enlarge")

Trade node window, showing the tooltip for trade forwarded out of the node. The cursor is hovering over the red part of the pie chart.

A country with trade power in a node who either has a merchant present and set to steer, or is not collecting there but is collecting in a node somewhere downstream (no matter how many hops away), is transferring. There are two stages to transferring trade:

1.  The total value of the transfer: Countries aggregate their trade power (whether they have a merchant present or not) to increase the total share of trade value that leaves the node (_outgoing trade value_); that is, competing against those who are collecting in the node and hence "retaining trade".
2.  The direction of the transfer: Of those countries transferring with merchants (and only them) their relative trade power determines the share of outgoing trade value that flows into one particular outgoing node.

##### Pulling trade value forward\[[edit](/index.php?title=Trade&veaction=edit&section=10 "Edit section: Pulling trade value forward") | [edit source](/index.php?title=Trade&action=edit&section=10 "Edit section: Pulling trade value forward")\]

All countries transferring trade pool their trade power to pull trade out of the node. The amount of **outgoing trade value** is equal to

![{\displaystyle {\text{Outgoing trade value}}={\text{Total trade value in node}}\times {\frac {\sum {\text{Trade power of countries transferring}}}{\sum {\text{Trade power of countries transferring}}+\sum {\text{Trade power of countries collecting}}}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/03a9261054461b06b279a99b926d9bc338d46944)

or, equivalently,

![{\displaystyle {\text{Outgoing trade value}}={\text{Total trade value in node}}-\sum {\text{Trade value collected by each country}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/21da6e3ca30e0a3097bd73225c93de1602cf1517)

At this stage, all countries transferring trade cooperate with each other, and compete with those collecting.

##### Steering trade\[[edit](/index.php?title=Trade&veaction=edit&section=11 "Edit section: Steering trade") | [edit source](/index.php?title=Trade&action=edit&section=11 "Edit section: Steering trade")\]

Each country transferring _with a [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant") merchant present_ selects an outgoing node to steer trade to (the player does this from the trade [map mode](/Map_mode "Map mode")). All countries steering in a particular direction cooperate with each other, and compete with those steering in other directions as well as those collecting, whereas they neither compete nor cooperate at this stage with countries transferring but not steering. The amount of trade value steered towards a particular node is

![{\displaystyle {\text{Steered trade value}}={\text{Outgoing trade value}}\times {\frac {\sum {\text{Modified trade power of countries steering to this node}}}{\sum {\text{Modified trade power of all countries steering}}}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/4dc537810dfce9fa00f473102da65876272c629a)

[![](/images/thumb/f/fa/Trade_steering_tooltip.jpg/300px-Trade_steering_tooltip.jpg)](/File:Trade_steering_tooltip.jpg)

[](/File:Trade_steering_tooltip.jpg "Enlarge")

Trade node window and trade map mode. The tooltip (on the steering button) lists countries steering in each direction, their trade power used to steer and trade steering bonus, and the percentage of power used to steer in each direction. Notice the trade power listed in the window for Lithuania, Teutonic Order and Sweden, which is used to pull trade forward, and their power listed in the tootip, which is used for steering and is higher due to their trade steering bonuses.

In this equation, "modified trade power" means the country's trade power multiplied by 1 + its [![Trade steering.png](/images/thumb/b/b1/Trade_steering.png/28px-Trade_steering.png)](/Trade_steering "Trade steering") trade steering modifier. If this would be a division by zero (i.e. no trade power is used to steer), it is instead set to

![{\displaystyle {\text{Steered trade value}}={\frac {\text{Outgoing trade value}}{\text{Number of outgoing nodes being transferred to}}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/0c66f0d07625895472c7d7b13b602fcc9681eda1).

In other words, if no one is steering in any direction, trade value is divided equally between all outgoing nodes. (But in this situation a downstream node will only be considered for transferring trade value if someone is transferring between those nodes, i.e. they have trade power in both of them. For example, at the start of the game when all provinces in the Caribbean and Polynesian Triangle are uncolonized, all trade leaving Mexico goes to Panama; when the Caribbean is colonized, it's divided between there and Panama, but still none goes to the Polynesian Triangle.)

There are two important consequences of this equation:

*   Countries that are not steering with a merchant have _no influence whatsoever_ over the direction in which trade flows. They only influence _how much_ trade value leaves the node.
*   If the amount of trade power used to steer towards a particular outgoing node is zero, then value of trade steered there is zero (unless it is zero for all outgoing nodes). In other words, if there are merchants steering, but one outgoing node has no merchants steering to it, then _that node receives no transferred trade value at all_. If only one country is steering, _all_ trade leaving the node goes to the node that country selected, no matter how tiny their trade power is.

Sources of trade power\[[edit](/index.php?title=Trade&veaction=edit&section=12 "Edit section: Sources of trade power") | [edit source](/index.php?title=Trade&action=edit&section=12 "Edit section: Sources of trade power")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

### Provincial trade power\[[edit](/index.php?title=Trade&veaction=edit&section=13 "Edit section: Provincial trade power") | [edit source](/index.php?title=Trade&action=edit&section=13 "Edit section: Provincial trade power")\]

Every province contributes an amount of trade power to its controller's country in the local trade node. The exact amount and relevant calculations can be seen in [province](/Province "Province") view under Trade category. It is determined by the following factors:

[![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power")

Modifier

Local trade power

Notes

[![Colonialism](/images/thumb/4/49/Colonialism.png/28px-Colonialism.png)](/Institutions#Colonialism "Colonialism")

**Birthplace of Colonialism**

**+5**

[![Development.png](/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development")

**Development**

**+0.2** per point

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")

**Level 1 Center of Trade** (Natural Harbour and Emporium)

**+5**

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")

**Level 2 Center of Trade** (Entrepot and Market Town)

**+10**

Requires total province development to equal at least 10

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")

**Level 3 Center of Trade** (World Port and World Trade Center)

**+25**

Requires total province development to equal at least 25

[![Estuary.png](/images/thumb/8/89/Estuary.png/28px-Estuary.png)](/Estuary "Estuary")

**River estuaries**

**+10**

Except the Ganges (Bengal), Irrawaddy (Burma) and The Nile (Egypt), which give only **+5** but are present in two provinces each.

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")

**Sound Toll**

**+20**

Sjælland

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")

**Bosphorus Sound Toll**

**+10**

Constantinople

[![Colonialism](/images/thumb/4/49/Colonialism.png/28px-Colonialism.png)](/Institutions#Colonialism "Colonialism")

**Embraced Colonialism**

**+10%**

[![Global Trade.png](/images/thumb/9/97/Global_Trade.png/28px-Global_Trade.png)](/Global_Trade "Global Trade")

**Birthplace of Global Trade**

**+10%**

**Coastal**

**+25%**

[![Subject tradecompany icon.png](/images/thumb/8/8d/Subject_tradecompany_icon.png/28px-Subject_tradecompany_icon.png)](/Trade_company "Trade company")

**Trade Company**

**+100%**

Requires [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations or [![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") Dharma.

[![Province trade power value.png](/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade")

**Trading Post**

**+10**

Requires [![Res Publica.png](/images/thumb/b/b5/Res_Publica.png/28px-Res_Publica.png)](/Res_Publica "Res Publica") Res Publica. One per trade node available only to Merchant Republics.

[![Great project suez canal.png](/images/thumb/8/87/Great_project_suez_canal.png/48px-Great_project_suez_canal.png)](/File:Great_project_suez_canal.png)

**Canal**

**+10**/**+20**/**+30**/**+50**

[Kiel Canal](/Kiel_Canal "Kiel Canal") in Holstein, [Panama Canal](/Panama_Canal "Panama Canal") in Panama, [Suez Canal](/Suez_Canal "Suez Canal") in Sharqiya

[![Great project belem tower.png](/images/thumb/f/ff/Great_project_belem_tower.png/48px-Great_project_belem_tower.png)](/File:Great_project_belem_tower.png)

**Belem Tower**

**+5**/**+10**/**+15**

Lisboa (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)

[![Mercantilism.png](/images/thumb/0/05/Mercantilism.png/28px-Mercantilism.png)](/Mercantilism "Mercantilism")

**Mercantilism**

**+2%** per point

[![Latin marketplace.png](/images/thumb/2/2b/Latin_marketplace.png/28px-Latin_marketplace.png)](/Marketplace "Marketplace")

**Marketplace**

**+50%**

[![Latin trade depot.png](/images/thumb/6/6b/Latin_trade_depot.png/28px-Latin_trade_depot.png)](/Trade_depot "Trade depot")

**Trade Depot**

**+100%**

[![Latin stock exchange.png](/images/thumb/d/dc/Latin_stock_exchange.png/28px-Latin_stock_exchange.png)](/Stock_exchange "Stock exchange")

**Stock Exchange**

**+125%**

**Occupied**

**−50%**

Trade power goes to the occupier.

**Under siege**

**−25%**

[![Local autonomy.png](/images/thumb/1/17/Local_autonomy.png/28px-Local_autonomy.png)](/Local_autonomy "Local autonomy")

**Local autonomy**

Multiplicative **−50%** at 100% autonomy

Autonomy has no effect in trade company provinces.

### Provincial trade power modifiers\[[edit](/index.php?title=Trade&veaction=edit&section=14 "Edit section: Provincial trade power modifiers") | [edit source](/index.php?title=Trade&action=edit&section=14 "Edit section: Provincial trade power modifiers")\]

Certain ideas and policies improve provincial trade power.

[![Provincial trade power modifier.png](/images/thumb/9/94/Provincial_trade_power_modifier.png/24px-Provincial_trade_power_modifier.png)](/Provincial_trade_power_modifier "Provincial trade power modifier")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

—

*   Colonial idea 2: Continental Trade
*   Mazovian idea 7: Central Emporium

*   Full Plutocracy
*   Mamluk ambition

*   Infrastructure-Plutocratic: Plutocratic Rule

+20%

*   East India traditions

*   Gujarat Sultanate idea 5: Hub of the Indian Ocean Trade
*   Hanseatic idea 6: Regularized Contributions
*   Hanseatic idea 7: Regularized Contributions
*   Wallachian idea 2: Foreign Trade Restrictions

—

—

+15%

*   Tverian traditions

*   Ainu idea 3: Southern Traders
*   Circassian idea 2: Merchants Of Genoa
*   Client State idea 5: Mercantile Privileges
*   Kanem Bornuan idea 7: Duties on Sahara Trade
*   Malabari idea 5: Control the Inland
*   Swabian idea 3: Land of the Free Cities
*   Three Leagues idea 6: An Economic League
*   Trading City idea 1: City of Commerce
*   Westphalian idea 7: Cities of the Rhineland
*   Yarkandi idea 7: Encourage Tarim Trade

*   Huron ambition

—

+10%

*   Berg traditions
*   Bornean traditions
*   Lan Na traditions
*   Pegu traditions
*   Rostov traditions
*   Shirvani traditions
*   Wurzburgian traditions

*   Amago idea 5: Dominate the Coastal Trade
*   Andean idea 2: Mountain Roads Network
*   Bremen idea 5: Vegesack Harbor
*   Butuan idea 5: Balangay
*   Dortmund idea 3: Chief City of the Rhine
*   Golden Horde idea 4: Secure the Trade Routes
*   Goslar idea 4: Capitalizing on the Hanseatic League
*   Kongo idea 5: The Triangle Trade
*   Luccan idea 2: Libertas!
*   Malvi idea 7: Malwa Opium
*   Rothenburg idea 6: The Holy Blood
*   Saluzzo idea 1: The Saluzzo Golden Age
*   Sami idea 4: Encourage growth of the Winter Market
*   Savoyard idea 6: Alpine Tolls
*   Saxe-Lauenburg idea 7: Old Salt Route
*   Silesian idea 6: Hanseatic Ties
*   Trent idea 4: Italy and the Empire

—

—

### Transfers from traders downstream\[[edit](/index.php?title=Trade&veaction=edit&section=15 "Edit section: Transfers from traders downstream") | [edit source](/index.php?title=Trade&action=edit&section=15 "Edit section: Transfers from traders downstream")\]

[![](/images/thumb/b/b5/Transfer_trade_power_upstream.png/300px-Transfer_trade_power_upstream.png)](/File:Transfer_trade_power_upstream.png)

[](/File:Transfer_trade_power_upstream.png "Enlarge")

Ming has 14.1 provincial trade power in the Yumen node. They don't collect here or anywhere downstream, but 20% of their unmodified provincial power transfers to the incoming node Beijing. You see this blue left-facing arrow in nodes not upstream of any collection, but the transfer happens also in collecting and transferring nodes.

Any nation that has at least 10 provincial trade power in the node enjoys _the propagation of that power upstream_. An amount equivalent to 20% of the nation's provincial trade power is added to the total trade power of that nation in every immediate upstream node, where it is denoted as _transfers from traders downstream_. Global trade power modifiers do not apply to the amount considered for propagation, but are applied in the upstream node instead.[\[2\]](#cite_note-2)

If a country has a ship tradepower propagation modifier also a corresponding part of the ship trade power is added to the provincial trade power. E.g. with [![Ship tradepower propagation.png](/images/thumb/b/b5/Ship_tradepower_propagation.png/24px-Ship_tradepower_propagation.png)](/File:Ship_tradepower_propagation.png) **+20%** ship tradepower propagation 20% × 20% = 4% of ship trade power is also added to upstream node.

[![Ship tradepower propagation.png](/images/thumb/b/b5/Ship_tradepower_propagation.png/24px-Ship_tradepower_propagation.png)](/Ship_tradepower_propagation "Ship tradepower propagation")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

—

*   Maritime idea 4: Grand Navy

—

—

+20%

—

*   Malayan idea 5: Malay Merchants in Every Port

—

—

[![Ship tradepower propagation.png](/images/thumb/b/b5/Ship_tradepower_propagation.png/24px-Ship_tradepower_propagation.png)](/File:Ship_tradepower_propagation.png)

Conditions

**+25%**

[![Gov pirate republic.png](/images/thumb/1/11/Gov_pirate_republic.png/28px-Gov_pirate_republic.png)](/Pirate_republic "Pirate republic") [Power to the Smugglers](/Power_to_the_Smugglers "Power to the Smugglers") tier 8 reform for pirate republics

**+20%**

with [![Ab ship power propagation.png](/images/thumb/8/8b/Ab_ship_power_propagation.png/28px-Ab_ship_power_propagation.png)](/File:Ab_ship_power_propagation.png) ‘Powerful Trade Ships’ ability during the [![Age of Reformation.png](/images/thumb/d/d9/Age_of_Reformation.png/24px-Age_of_Reformation.png)](/Age_of_Reformation "Age of Reformation") Age of Reformation

### Trade company\[[edit](/index.php?title=Trade&veaction=edit&section=16 "Edit section: Trade company") | [edit source](/index.php?title=Trade&action=edit&section=16 "Edit section: Trade company")\]

_Main article: [Trade company](/Trade_company "Trade company")_  

[![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations")[![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma")

Available only with the [Wealth of Nations](/Wealth_of_Nations "Wealth of Nations") DLC _or_ the [Dharma](/Dharma "Dharma") DLC enabled.

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.30.

A country that owns a province in a trade node that is not in their home node but is in a trade company region can add it to a [![Subject tradecompany icon.png](/images/thumb/8/8d/Subject_tradecompany_icon.png/28px-Subject_tradecompany_icon.png)](/Trade_company "Trade company") [trade company](/Trade_company "Trade company"). Provinces in [trade companies](/Trade_companies "Trade companies") get [![Province trade power modifier.png](/images/thumb/8/82/Province_trade_power_modifier.png/28px-Province_trade_power_modifier.png)](/Local_trade_power "Local trade power") **+100%** local trade power. There are 63 trade company regions throughout the old world.

### Protect trade\[[edit](/index.php?title=Trade&veaction=edit&section=17 "Edit section: Protect trade") | [edit source](/index.php?title=Trade&action=edit&section=17 "Edit section: Protect trade")\]

A country may increase its trade power in maritime (non-inland) [trade nodes](/Trade_nodes "Trade nodes") by sending its [light ships](/Light_ships "Light ships") on Protect Trade mission. Ships can only be sent to protect trade in coastal nodes where the country already has trade power or a merchant. Each light ship increases trade power in the trade node in which they are protecting trade, the amount depending on how advanced it is; higher technology unlocks better light ships. Having the ships out of port for the Protect Trade mission costs [![Sailors.png](/images/thumb/8/8f/Sailors.png/28px-Sailors.png)](/Sailors "Sailors") **−1** sailor per ship per month.

[![Diplomatic technology.png](/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology")

Name

[![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power")

[![Hull.png](/images/thumb/8/8c/Hull.png/28px-Hull.png)](/Ship_hull "Ship hull")

[![Icon ship cannons.png](/images/thumb/1/13/Icon_ship_cannons.png/28px-Icon_ship_cannons.png)](/Cannons "Cannons")

[![Icon ship speed.png](/images/thumb/5/54/Icon_ship_speed.png/28px-Icon_ship_speed.png)](/Ship_speed "Ship speed")

[![Sailors.png](/images/thumb/8/8f/Sailors.png/28px-Sailors.png)](/Sailors "Sailors")

Description

2

Barque

2.0

8

10

10

50

_The Barque was a small sailing ship, originally used for trade. Adapting these for warfare provided a smaller and faster alternative to the larger carracks._

9

Caravel

2.5

10

13

11

75

_The caravel was a small, very maneuverable ship which could sail with a high precision on long discovery journeys. Although designs varied, a caravel had a foresail, a square mainsail and lateen mizzen. Its smaller size limited the number of guns on board, but it also meant that this light ship could explore shallow coastal waters and estuaries. Vasco Da Gama, Cabot, Columbus and Magellan used caravels during their late 15th century and early 16th century voyages._

15

Early Frigate

3.0

12

15

12

100

_With the increasing overseas trade, there was a need for a fast escort vessel to provide safe journey. The early frigates were developed for this. They were smaller, leaner ships of war with one gun deck, and provided protection from piracy in dangerous waters._

19

Frigate

3.5

16

20

13

125

_As time passed, the frigate evolved. It became larger and heavily armed, sometimes with two gun decks. The frigate's combination of speed and firepower meant that it could outrun any ship with more guns and outgun any faster ships. The fleet built by the Commonwealth of England in the 1650s consisted almost exclusively of frigates._

23

Heavy Frigate

4.0

20

25

14

125

_Two decked vessels normally carrying about 40 guns._

26

Great Frigate

5.0

24

30

15

150

_A larger type of frigate, carrying additional guns._

Some bonuses to ship trade power are:

[![Ship trade power.png](/images/thumb/8/85/Ship_trade_power.png/24px-Ship_trade_power.png)](/Ship_trade_power "Ship trade power")

Triggers

**+33%**

Selecting the 'Merchant Navy' Naval Doctrine

**+20%**

Being in a Trade League

**+5%**

Per [![Naval leader maneuver.png](/images/thumb/4/4a/Naval_leader_maneuver.png/28px-Naval_leader_maneuver.png)](/Naval_leader_maneuver "Naval leader maneuver") Maneuver skill of the fleet's admiral

**+15%**

Extortioner [admiral trait](/Personalities#Leader_traits "Personalities")

[![Ship trade power.png](/images/thumb/8/85/Ship_trade_power.png/24px-Ship_trade_power.png)](/Ship_trade_power "Ship trade power")

Traditions

Ideas

Bonuses

CollapsePolicies

+33%

—

—

—

*   Mercenary-Trade: Merchants for Hire Act
*   Naval-Trade: Fortified Trading Posts

+25%

*   Andalusian traditions

*   Hanseatic idea 2: The Handelsmarine

*   Cascadian ambition

—

+20%

*   Kilwan traditions

*   Kaurna idea 3: Coastal Pangkarra
*   Ligori idea 7: Protect Ligori Trade
*   Malaccan idea 2: Maritime Laws
*   Palembang idea 5: Trading Hub
*   Samoan idea 7: Polynesian Triangle Trade
*   Sicilian idea 5: Sicilian Trade Fleets

*   Cirebonese ambition
*   Ferraran ambition
*   Larrakia ambition

*   Maritime-Plutocratic: The Protected Shipping Lanes Act

+15%

—

*   Trading City idea 7: Trade Fleet

—

—

+10%

*   Gujarat Sultanate traditions

*   Fijian idea 2: Lutunasobasoba and Degel
*   Frisian idea 1: Coastal Industry
*   Luzon idea 3: Sino-Philippine Trade

—

—

#### Supply range\[[edit](/index.php?title=Trade&veaction=edit&section=18 "Edit section: Supply range") | [edit source](/index.php?title=Trade&action=edit&section=18 "Edit section: Supply range")\]

[Light ships](/Light_ships "Light ships") on protect trade missions can only be sent to [trade nodes](/Trade_nodes "Trade nodes") where the country already has [trade power](/Trade_power "Trade power") and the [supply range](/Supply_range "Supply range") is met. The limitation on supply range applies even when naval attrition is removed at [![Diplomatic technology.png](/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology") diplomatic tech 22. If the [trade range](/Trade_range "Trade range") permits, a country can send a [merchant](/Merchant "Merchant") to a node without any initial trade power and then follow up with light ships protecting trade (as long as these are within supply range). A good way to arrange for a favorable supply range is by gaining [fleet basing rights](/Diplomacy#Fleet_basing_rights "Diplomacy") from a nation in the vicinity of the target trade node.

### Other sources of trade power\[[edit](/index.php?title=Trade&veaction=edit&section=19 "Edit section: Other sources of trade power") | [edit source](/index.php?title=Trade&action=edit&section=19 "Edit section: Other sources of trade power")\]

*   **Merchant Present:** The presence of a merchant increases a nation's trade power by **+2**.
*   **Main trade port in area:** A nation gets additional **+5** trade power in its home node.
*   [Colonial nations](/Colonial_nations "Colonial nations") provide their overlord with **50%** of their trade power.
*   With [![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum") Mare Nostrum, members of a [![Trade league.png](/images/thumb/a/a0/Trade_league.png/28px-Trade_league.png)](/Trade_league "Trade league") [trade league](/Trade_league "Trade league"):
    *   provide **50%** of their trade power to the leader of the league
    *   provide an extra [![Trade steering.png](/images/thumb/b/b1/Trade_steering.png/28px-Trade_steering.png)](/Trade_steering "Trade steering") **+2.5%** trade steering to the leader of the league (cumulative with the bonus from other members); for example 10 league members would provide **+25%** trade steering power to the merchant republic leading the league
    *   get an additional [![Ship trade power.png](/images/thumb/8/85/Ship_trade_power.png/28px-Ship_trade_power.png)](/Ship_trade_power "Ship trade power") **+20%** ship trade power.
*   Other nations can be [persuaded (through diplomacy)](/Diplomacy#Transfer_trade_power "Diplomacy") or [forced (through war)](/Warfare#Peace_terms "Warfare") to enter into a _Transfer Trade Power_ relation, which does not count towards the diplomatic relations limit. This transfers one country's trade power to another: a transfer enforced in a truce transfers 50%, while a diplomatically arranged transfer can transfer any amount from zero to 50%. Personal unions and vassals _do not_ transfer trade power to their suzerain. Only nodes where both countries have power are affected. The trade power gained this way is _not_ halved due to collecting outside the country's main trade node.
*   With [![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/28px-Common_Sense.png)](/Common_Sense "Common Sense") Common Sense, countries that have vassals or marches have a [subject interaction](/Subject_interaction "Subject interaction") for them to _divert trade_, which transfers **100%** of their vassal's trade power, at a cost of [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire") **+30%** liberty desire.

Merchants\[[edit](/index.php?title=Trade&veaction=edit&section=20 "Edit section: Merchants") | [edit source](/index.php?title=Trade&action=edit&section=20 "Edit section: Merchants")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

Merchants are [envoys](/Envoys "Envoys") used to alter the flow of [![Trade value.png](/images/thumb/f/f9/Trade_value.png/28px-Trade_value.png)](/Trade_value "Trade value") trade value by collecting or steering trade. A merchant must be stationed at a [trade node](/Trade_node "Trade node") to have any effect and can only travel a distance defined by a country's [![Trade range.png](/images/thumb/3/32/Trade_range.png/28px-Trade_range.png)](/Trade_range "Trade range") trade range. A _merchant present_ in a trade node gives a bonus of **+10%** to [![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/28px-Trade_efficiency.png)](/Trade_efficiency "Trade efficiency") trade efficiency and also increases the [![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") trade power by **2** in that node.

### Merchant trade power\[[edit](/index.php?title=Trade&veaction=edit&section=21 "Edit section: Merchant trade power") | [edit source](/index.php?title=Trade&action=edit&section=21 "Edit section: Merchant trade power")\]

The **2** base merchant trade power is modified by the following ideas

[![Merchant trade power.png](/images/thumb/3/39/Merchant_trade_power.png/24px-Merchant_trade_power.png)](/Merchant_trade_power "Merchant trade power")

Traditions

Ideas

Bonuses

ExpandPolicies

+15

—

*   Trade idea 5: Overseas Merchants

—

—

+10

—

*   East India idea 3: Chartered Merchants

—

—

+5

—

*   Sindhi idea 3: Strengthen Gujarati Connections

—

—

*   The government reform ['Mercantilistic Approach'](/Mercantilistic_Approach "Mercantilistic Approach") provides[![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+5** merchant trade power
*   The [![Flag of Lübeck](/images/thumb/0/09/L%C3%BCbeck.png/20px-L%C3%BCbeck.png)](/L%C3%BCbeck "Lübeck") [Lübeck](/L%C3%BCbeck "Lübeck") mission [A New System of Trade](/L%C3%BCbeckian_missions#A_New_System_of_Trade "Lübeckian missions") provides[![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+5** merchant trade power
*   holding [![](/images/thumb/5/50/Great_project_kilwa_city.png/47px-Great_project_kilwa_city.png)](/File:Great_project_kilwa_city.png) [Kilwa City](/Kilwa_City "Kilwa City") at [![](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](https://eu4.paradoxwikis.com/File:Great_project_level_icon_tier_2.png) Significant/[![](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) Magnificent level provides[![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+2**/**+4** merchant trade power

### Trade with no merchant\[[edit](/index.php?title=Trade&veaction=edit&section=22 "Edit section: Trade with no merchant") | [edit source](/index.php?title=Trade&action=edit&section=22 "Edit section: Trade with no merchant")\]

In the absence of merchants:

*   In the country's home node, the country will collect trade.
*   In non-home nodes that are not upstream from any nodes where the country is collecting trade, their trade power does not affect the flow of trade. It still [propagates upstream](#Transfers_from_traders_downstream) if the country has at least 10 provincial trade power.
*   In all other nodes, trade power is used to [pull trade forward](#Transferring_trade), increasing the _share of trade value transferred_. There is no influence on the _direction_ of trade (if at least one country is steering), only the amount transferred.
    *   _Exception:_ If no one is steering at a node, and no one with power there has power in a given downstream node, no trade is transferred there. Subsequently a country can induce trade to be transferred to that node by merely having trade power in both, if there is still no one steering.

### Merchant actions\[[edit](/index.php?title=Trade&veaction=edit&section=23 "Edit section: Merchant actions") | [edit source](/index.php?title=Trade&action=edit&section=23 "Edit section: Merchant actions")\]

Merchants can be sent to a trade node to perform one of two missions (as denoted in game interface):

*   **Collect from Trade**: Use the country's trade power to retain trade in the node, and turn it into [![Gold Icon.png](/images/2/26/Gold_Icon.png)](/Ducats "Ducats") income.
    *   In other nodes than the country's home node, this gives a multiplicative penalty of [![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") **−50%** trade power.[\[1\]](#cite_note-not_main_city-1)
*   **Transfer Trade Power**: Use the country's trade power to pull trade forward in the trade network, and simultaneously to influence trade to flow preferentially into one of the downstream nodes (see [§ Steering trade](#Steering_trade) above). The player can choose the direction to steer trade in using the trade [map mode](/Map_mode "Map mode"). (The name of this mission is a misnomer, as it is trade value that is being steered, not trade power.)
    *   A merchant steering trade in inland nodes enables the [![Caravan power.png](/images/thumb/a/ac/Caravan_power.png/28px-Caravan_power.png)](/Caravan_power "Caravan power") [caravan](/Caravan "Caravan") bonus.

### Gaining merchants\[[edit](/index.php?title=Trade&veaction=edit&section=24 "Edit section: Gaining merchants") | [edit source](/index.php?title=Trade&action=edit&section=24 "Edit section: Gaining merchants")\]

With [![Dharma.png](/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") [Dharma](/Dharma "Dharma"), the number of merchants determines the number of Level 3 Centers of Trade a nation can have. Every country has a base of [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant") **2** merchants. Means of acquiring more include:

[![Merchants.png](/images/thumb/2/24/Merchants.png/24px-Merchants.png)](/Merchant "Merchant")

Traditions

Ideas

Bonuses

ExpandPolicies

+1

*   American traditions
*   Asturian traditions
*   Bengali traditions
*   Bulgarian traditions
*   Catalan traditions
*   Epirote traditions
*   Gujarati Princedom traditions
*   Hanseatic traditions
*   Hormuz traditions
*   Pegu traditions
*   Pskovian traditions
*   West Indies traditions

*   Economic idea 7: Merchant Passes
*   Expansion idea 2: Additional Merchants
*   Plutocratic idea 4: Free Merchants
*   Trade idea 2: Free Trade
*   Ando idea 4: Trade Expansion
*   Arakanese idea 3: Bay of Bengal Trade
*   Augsburger idea 4: The Fugger
*   Butuan idea 3: Butuan Trade Connections
*   Canadian idea 2: The Hudson Bay Company
*   Candarid idea 1: Genoese Connections
*   Cascadian idea 6: The Hudson Bay Company
*   Caspian idea 7: Promote Foreign Trade
*   Dithmarscher idea 3: Trade Missions
*   Dortmund idea 5: Dortmund Moneylending Families
*   Dutch idea 2: Dutch Trading Spirit
*   East India idea 3: Chartered Merchants
*   Eora idea 7: Berewaldal
*   Estonian idea 5: Baltic Trade
*   Gujarat Sultanate idea 7: Gujarati Diaspora Descends on Africa
*   Gutnish idea 5: Gutnish Merchant Adventurers
*   Hanseatic idea 2: Strong League Obligations
*   Holstein idea 4: Kieler Umschlag
*   Huron idea 1: Great Lakes Trade
*   Javan idea 4: Pan-Asian Trade
*   Kievan idea 6: Support Local Traders
*   Kilwan idea 6: Merchants of Zanzibar
*   Larrakia idea 1: The Makassarian Trade
*   Malabari idea 4: Trade Factors
*   Malayan Sultanate idea 1: Indian Ocean Trade
*   Malayan idea 5: Malay Merchants in Every Port
*   Malian idea 6: Seek New Markets for Salt
*   Mogadishan idea 1: Indian Ocean Trade
*   Moluccan idea 3: Agents of Trade
*   Nepalese Princedom idea 2: Invite Kashmiri Traders
*   Novgorod idea 4: Control of the Hanseatic Kontor
*   Omani idea 7: Expansion of Trade Contacts
*   Ouchi idea 4: The Merchants of Hakata City
*   Pattani idea 5: Entrepôt
*   Pomeranian idea 2: Pomeranian Merchants
*   Sami idea 3: Regulate Trade with the Southerners
*   Shirvani idea 7: Merchants of Baku
*   Shoni idea 4: Nagasaki City
*   Sinhalese idea 3: Pearl of the Indian Ocean
*   Siouan Federation idea 4: Trade Fairs
*   Somalian idea 6: Indian Merchants
*   South Indian idea 7: Merchant Capitalists
*   Sumatran idea 5: Merchants of The Indian Ocean
*   Sundanese idea 5: Pan-Asian Trade
*   Trading City idea 3: Merchant Guild
*   Tumbuka idea 7: Welcome Swahili Merchants
*   Yemeni idea 6: Promoting the Yemeni Trade Ports

*   Full Trade Focus
*   Ashanti ambition
*   Clanricarde ambition
*   Galician ambition
*   Gond ambition
*   Interlacustrine ambition
*   Ionian ambition
*   Malaccan ambition
*   Odoyev ambition

*   Aristocratic-Trade: Trade Connections Policy
*   Defensive-Trade: The Armed Neutrality Act
*   Naval-Influence: The Cooperation Act
*   Plutocratic-Trade: Trade Kontor Network

*   Merchant [republics](/Republics "Republics") have [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant.
*   Embracing the [Global Trade institution](/Institutions#Global_Trade "Institutions") gives [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant.
*   Some events can give a national modifier that temporarily provides [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant.
*   The _“[Found Indian Trade Company](/List_of_decision_lists#Found_Indian_Trade_Company "List of decision lists")”_ decision gives [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant. This requires being a country with a capital in Europe, Africa or America, the Global Trade institution embraced, at least two ports, and one coastal province in India, China, the East Indies or Japan.
    *   The [![Flag of Netherlands](/images/thumb/3/32/Netherlands.png/20px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands") has _“[Found Oost-Indische Compagnie](/Netherlands#Decisions "Netherlands")”_ instead, which has different requirements, but likewise gives an extra merchant.
*   Countries that control one of a number of trade nodes have the _“[Confirm Thalassocracy](/Confirm_Thalassocracy "Confirm Thalassocracy")”_ decision (requires all [maritime ideas](/Ideas#Maritime "Ideas") and control of several specific trade nodes), which gives [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant.
*   With [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") [Wealth of Nations](/Wealth_of_Nations "Wealth of Nations"), a country gets [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant for each [trade company](/Trade_company "Trade company") that controls the majority (>51%) of the provincial trade power in that region. (Non-trade company provinces and sources of trade power other than provinces are not considered.)
*   A country gets [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant for each [colonial nation](/Colonial_nation "Colonial nation") with at least 10 provinces.
*   Winning a [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament debate "Charter Trade Company" provides **+1** merchant for 10 years.
*   With [![The Cossacks.png](/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks") [The Cossacks](/The_Cossacks "The Cossacks"), the [![Tengri](/images/thumb/9/9f/Tengri.png/24px-Tengri.png)](/Tengri "Tengri") Tengri religion with syncretic faith [![Zoroastrianism.png](/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") **Zoroastrian** provides [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant.
*   With [![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/28px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization") [Cradle of Civilization](/Cradle_of_Civilization "Cradle of Civilization"), Sunni countries are able to invite a [![Shafi'i school](/images/thumb/9/9d/Muslim_school_shafi%27i.png/28px-Muslim_school_shafi%27i.png)](/Shafi%27i "Shafi'i school") Shafi'i scholar, providing [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant.
*   With [![Rights of Man.png](/images/thumb/5/50/Rights_of_Man.png/28px-Rights_of_Man.png)](/Rights_of_Man "Rights of Man") [Rights of Man](/Rights_of_Man "Rights of Man"), [![Fetishist](/images/thumb/8/8d/Fetishist.png/24px-Fetishist.png)](/Fetishist "Fetishist") Fetishist religion countries who have interacted with [![Zoroastrianism.png](/images/thumb/2/25/Zoroastrianism.png/24px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Zoroastrian religion nations are able to choose the Mazdayasna cult, [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+2** merchants.
*   holding [![](/images/thumb/d/d6/Great_project_krakow_cloth_hall.png/47px-Great_project_krakow_cloth_hall.png)](/File:Great_project_krakow_cloth_hall.png) [Kraków Cloth Hall](/Krakow_Cloth_Hall "Krakow Cloth Hall") at [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](https://eu4.paradoxwikis.com/File:Great_project_level_icon_tier_3.png) Magnificent level provides[![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+2** merchants. (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)
*   holding [![](/images/thumb/d/d6/Great_project_krakow_cloth_hall.png/47px-Great_project_krakow_cloth_hall.png)](/File:Great_project_krakow_cloth_hall.png) [Kraków Cloth Hall](/Krakow_Cloth_Hall "Krakow Cloth Hall") at [![](/images/thumb/a/a0/Great_project_level_icon_tier_1.png/24px-Great_project_level_icon_tier_1.png)](/File:Great_project_level_icon_tier_1.png) Noteworthy or[![](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) Significant level provides [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant. (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)
*   holding [![](/images/thumb/5/59/Great_project_bam_citadel.png/47px-Great_project_bam_citadel.png)](/File:Great_project_bam_citadel.png) [Bam Citadel](/Bam_Citadel "Bam Citadel") at [![](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) Significant or [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](https://eu4.paradoxwikis.com/File:Great_project_level_icon_tier_3.png) Magnificent level provides [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)
*   holding [![](/images/thumb/3/3e/Great_project_bara_katra.png/47px-Great_project_bara_katra.png)](/File:Great_project_bara_katra.png) [Bara Katra](/Bara_Katra "Bara Katra") at [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](https://eu4.paradoxwikis.com/File:Great_project_level_icon_tier_3.png) Magnificent level provides [![Merchants.png](/images/thumb/2/24/Merchants.png/28px-Merchants.png)](/Merchant "Merchant")**+1** merchant (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)

### Trade range\[[edit](/index.php?title=Trade&veaction=edit&section=25 "Edit section: Trade range") | [edit source](/index.php?title=Trade&action=edit&section=25 "Edit section: Trade range")\]

Merchants can only reach nodes at this distance from a cored province (or a cored province of a junior partner, colonial nation or client state). The distance is measured to the central province of the node, visible on the trade map mode. Base trade range is increased by [![Diplomatic technology.png](/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology") diplomatic technology (100 at tech 1 and 400 at tech 32) and some decisions and ideas.

*   Trade Range is increased by certain ideas and policies.

[![Trade range.png](/images/thumb/3/32/Trade_range.png/24px-Trade_range.png)](/Trade_range "Trade range")

Traditions

Ideas

Bonuses

ExpandPolicies

+33%

—

*   Ryukyuan idea 4: Maritime Commercialism

—

—

+25%

*   Swahili traditions

*   Maritime idea 1: Merchant Traditions
*   Trade idea 3: Merchant Adventures
*   Kilwan idea 1: Kilwan Latitude Staves
*   Trading City idea 6: City of Great Reach

—

—

+20%

—

*   Gujarat Sultanate idea 2: Jain Connections
*   Gujarati Princedom idea 7: Extend Trade Routes to Africa
*   Horn of African idea 2: The Land of Punt Legend
*   Kono idea 6: Trade With Continental Asia
*   Malabari idea 1: Merchants of Southern India
*   Mesoamerican idea 7: Obsidian and Jade
*   Mogadishan idea 1: Indian Ocean Trade
*   South Indian idea 1: Merchants of Southern India

—

—

+15%

*   Sumatran traditions
*   Traditions of The Hansa

*   Evenk idea 2: Reindeer Herding

—

*   Indigenous-Trade: Commercial Tribes

+10%

—

*   Dutch idea 2: Dutch Trading Spirit
*   East India idea 5: Intercontinental Trade
*   Mamluk idea 1: Red Sea Trade
*   West Indies idea 4: The American Trade Hub

—

—

Winning a [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament debate "Charter Trade Company" provides **+20%** trade range for 10 years.

### Trade policies\[[edit](/index.php?title=Trade&veaction=edit&section=26 "Edit section: Trade policies") | [edit source](/index.php?title=Trade&action=edit&section=26 "Edit section: Trade policies")\]

[![Cradle of Civilization.png](/images/thumb/2/23/Cradle_of_Civilization.png/28px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization")

Available only with the [Cradle of Civilization](/Cradle_of_Civilization "Cradle of Civilization") DLC enabled.

A nation can set a trade policy in any node where they have a merchant present. There is no cost to setting this policy and it can be changed every 12 months. Policies available to all nations (except _Propagate Religion_, which requires a religion in the **Muslim** religion group) are:

Trade policy

Effects

[![Maximize Profit icon](/images/c/ca/Maximize_Profit.png)](/File:Maximize_Profit.png "Maximize Profit icon")

Maximize Profit

Your Merchant will tirelessly work to maximize profit in this Node.

[![Trade power.png](/images/thumb/1/10/Trade_power.png/24px-Trade_power.png)](/Trade_power "Trade power")**+5%** Trade power (Default policy).

[![Hostile Trading icon](/images/5/55/Hostile_Trading.png)](/File:Hostile_Trading.png "Hostile Trading icon")

Hostile Trading

Your Merchant will gather intelligence from countries active in the same Node.

[![Spy network construction.png](/images/thumb/d/d2/Spy_network_construction.png/24px-Spy_network_construction.png)](/Spy_network_construction "Spy network construction")**+25%** Spy network construction with all other nations with their home node or a merchant located there.

[![Improve Inland Routes icon](/images/d/d5/Improve_Inland_Routes.png)](/File:Improve_Inland_Routes.png "Improve Inland Routes icon")

Improve Inland Routes

Your Merchant will gather knowledge of the terrain in this node which will benefit your armies.

[![Siege ability.png](/images/thumb/f/f4/Siege_ability.png/24px-Siege_ability.png)](/Siege_ability "Siege ability")**+10%** Siege ability and [![Artillery bonus vs fort.png](/images/thumb/2/29/Artillery_bonus_vs_fort.png/28px-Artillery_bonus_vs_fort.png)](/Artillery_bonus_vs_fort "Artillery bonus vs fort") **+1** Artillery bonus versus forts for all provinces in the node (Only possible with more than 50% share of the trade power in the node, except if the "[Embrace Free Trade](/Monarchy "Monarchy")" Government Reform is enacted).

[![Establish Communities icon](/images/c/c1/Establish_Communities.png)](/File:Establish_Communities.png "Establish Communities icon")

Establish Communities

Your Merchant will strive to improve relations with other countries active in the Node.

[![Improve relations.png](/images/thumb/4/46/Improve_relations.png/24px-Improve_relations.png)](/Improve_relations "Improve relations")**+15%** Improve relations with all other nations with their home node or a merchant located there.

[![Propagate Religion icon](/images/3/38/Propagate_Religion.png)](/File:Propagate_Religion.png "Propagate Religion icon")

Propagate Religion

Your pious Merchant will work towards spreading the One True Faith in this Node.

A religious centre will be established in the node, automatically spreading the religion of the merchant's nation through the node. Only available for muslim countries (and dharmic countries which completed the [![Flag of Majapahit](/images/thumb/0/0c/Majapahit.png/20px-Majapahit.png)](/Majapahit "Majapahit") [Majapahit](/Majapahit "Majapahit") mission [The Porch of Mecca](/Majapahit_missions#The_Porch_of_Mecca "Majapahit missions")). Can only be activated when the trade node is in a [trade company region](/Trade_company "Trade company"), and with a 50% or more share of the trade power in said node (35% after completing the [![Flag of Pasai](/images/thumb/a/a2/Pasai.png/20px-Pasai.png)](/Pasai "Pasai") [Pasai](/Pasai "Pasai")/ [![Flag of Aceh](/images/thumb/1/17/Aceh.png/20px-Aceh.png)](/Aceh "Aceh") [Aceh](/Aceh "Aceh") mission [The Porch of Mecca](/Pasai_missions#The_Porch_of_Mecca "Pasai missions")). To maintain the policy 40% trade power is needed (30% after completing the [![Flag of Pasai](/images/thumb/a/a2/Pasai.png/20px-Pasai.png)](/Pasai "Pasai") [Pasai](/Pasai "Pasai")/ [![Flag of Aceh](/images/thumb/1/17/Aceh.png/20px-Aceh.png)](/Aceh "Aceh") [Aceh](/Aceh "Aceh") mission [The Porch of Mecca](/Pasai_missions#The_Porch_of_Mecca "Pasai missions")). Cannot convert Christian, Muslim or Jewish provinces (can't convert Hindu provinces if the owner has completed the [![Flag of Majapahit](/images/thumb/0/0c/Majapahit.png/20px-Majapahit.png)](/Majapahit "Majapahit") [Majapahit](/Majapahit "Majapahit") mission [The Porch of Mecca](/Majapahit_missions#The_Porch_of_Mecca "Majapahit missions")). Also available for countries with the "[Salvific Plutocracy](/Theocracy "Theocracy")" government reform during the Age of Reformation, turning the node into a Centre of Reformation.

Trade modifiers\[[edit](/index.php?title=Trade&veaction=edit&section=27 "Edit section: Trade modifiers") | [edit source](/index.php?title=Trade&action=edit&section=27 "Edit section: Trade modifiers")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

### Global trade power modifier\[[edit](/index.php?title=Trade&veaction=edit&section=28 "Edit section: Global trade power modifier") | [edit source](/index.php?title=Trade&action=edit&section=28 "Edit section: Global trade power modifier")\]

[![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Global_trade_power "Global trade power") **Global trade power modifier** increases trade power for nearly all purposes. In other words, it is applied before any other, specialised increases to trade power. The only time it does not apply is to provincial trade power before propagating it upstream.

Certain ideas and policies improve global trade power.

[![Trade power.png](/images/thumb/1/10/Trade_power.png/24px-Trade_power.png)](/Global_trade_power "Global trade power")

Traditions

Ideas

Bonuses

ExpandPolicies

+20%

*   Italian traditions

*   Expansion idea 7: Competitive Merchants
*   Trade idea 1: Shrewd Commerce Practice
*   Aragonese idea 5: Chartered Merchant Companies

*   Gujarat Sultanate ambition

—

+15%

*   Frankfurter traditions
*   Malayan traditions
*   Palembang traditions

*   Adalite idea 3: Zeila and Harar
*   Danziger idea 2: Vistula River Trade
*   Hamburger idea 1: Hanseatic City
*   Hanseatic idea 1: Foreign Kontors
*   Nuremberger idea 7: Nuremberg Exchange
*   Romanian idea 6: Phanariote Traders

*   Date ambition
*   East Indai ambition

—

+10%

*   Genevan traditions
*   Kiwi traditions
*   Larrakia traditions
*   Malaccan traditions
*   Münster traditions
*   Orleanaise traditions
*   Pisan traditions
*   Traditions of Theodoro
*   Veronese traditions

*   Acehnese/Pasai idea 1: Export Economy
*   Anhalt idea 1: Mittelgebirge
*   Antemoro idea 6: Strengthen control over the Slave Trade
*   Arabian idea 5: Bedouin Traders
*   Arawak idea 3: Orinoco Trade
*   Butuan idea 2: Northern Nusantara
*   Byzantine idea 5: Byzantine Merchant Class
*   Cham idea 3: South Indian Connections
*   Chimu idea 6: Specialized Economy
*   Deccani idea 3: Privileges for Foreign Traders
*   Epirote idea 6: Entrepôt of the Adriatic
*   Gutnish idea 4: Rebuild the Trade
*   Hanseatic idea 1: The End of the Victual Brothers
*   Holstein idea 6: The Trade of Two Seas
*   Hormuz idea 5: Maintain Trading Monopoly
*   Indian Sultanate idea 5: Equality Under the Law
*   Karelian idea 7: From the Varanginians to the Greeks
*   Latin idea 4: Trading Guilds of Pera
*   Livonian Knight idea 2: Merchants of the Hansa
*   Mesoamerican idea 2: Altepetl
*   Milanese idea 6: Merchant Princes
*   Mogadishan idea 3: East African Gold Trade
*   Montferrat idea 6: Crossroad of Powers
*   Najdi idea 3: Ships of the Desert
*   Norwegian idea 5: Seize the Opportunity
*   Ogasawara idea 6: Improving the Nakasendo
*   Oyo idea 6: Emporium of the South
*   Pagarruyung idea 2: Gold Trade
*   Portuguese idea 3: Feitorias
*   Pskovian idea 6: Arts and Crafts of Pskov
*   Rassid idea 3: Coffea Arabica
*   Ruthenian idea 4: East and West
*   Ruthenian idea 4: East and West
*   Songhai idea 1: Gold To Salt Trade
*   Sulawesi idea 6: Entrepot of Trade
*   Tyrconnell idea 2: The Fisher King
*   Vijayanagar idea 1: Promotion of Trade
*   West African idea 3: Kola Nuts
*   Yemeni idea 2: Coffea Arabica

*   Berber ambition
*   Cebu ambition
*   Jaunpuri ambition
*   Kilwan ambition
*   Malabari ambition
*   Pomeranian ambition
*   Swahili ambition

*   Diplomatic-Expansion: Commercial Embassies
*   Economic-Exploration: The Stamp Act
*   Exploration-Innovative: Benign Neglect
*   Infrastructure-Trade: Global Trade Networks Act

+5%

—

*   Mamluk idea 1: Red Sea Trade
*   National idea 4: Contract Law
*   Novgorod idea 4: Control of the Hanseatic Kontor
*   West Indies idea 4: The American Trade Hub

—

—

*   Each colonial nation (of at least 10 provinces) provides **+5%** global trade power to its overlord.
*   [![Yearly prestige.png](/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") Prestige provides between **−15%** and **+15%** global trade power.
*   [![Stability cost modifier.png](/images/thumb/e/eb/Stability_cost_modifier.png/28px-Stability_cost_modifier.png)](/Stability_cost_modifier "Stability cost modifier") Stability provides between **−3%** and **+3%** global trade power.
*   [![Power projection.png](/images/8/8b/Power_projection.png)](/File:Power_projection.png) Power projection provides between **0** and **+20%** global trade power.
*   [![Reformed.png](/images/thumb/3/3e/Reformed.png/24px-Reformed.png)](/Reformed "Reformed") Reformed religion [![Monthly fervor.png](/images/thumb/7/71/Monthly_fervor.png/28px-Monthly_fervor.png)](/Monthly_fervor "Monthly fervor") Fervor power Trade provides **+10%** global trade power modifier (requires [![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations).
*   [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") Parliament debate "Reduce Trade Regulations" provides **+5%** global trade power modifier for 10 years (requires [![Common Sense.png](/images/thumb/e/e4/Common_Sense.png/28px-Common_Sense.png)](/Common_Sense "Common Sense") Common Sense).
*   holding [![Great project ait benhaddou.png](/images/thumb/4/4c/Great_project_ait_benhaddou.png/48px-Great_project_ait_benhaddou.png)](/File:Great_project_ait_benhaddou.png) [Aït Benhaddou](/A%C3%AFt_Benhaddou "Aït Benhaddou") at [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) Magnificent level provides **+5%** global trade power (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)
*   holding [![Great project belem tower.png](/images/thumb/f/ff/Great_project_belem_tower.png/48px-Great_project_belem_tower.png)](/File:Great_project_belem_tower.png) [Belem Tower](/Belem_Tower "Belem Tower") provides **+5**/**+10**/**+15%** global trade power (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)
*   holding the [![Great project suez canal.png](/images/thumb/8/87/Great_project_suez_canal.png/48px-Great_project_suez_canal.png)](/File:Great_project_suez_canal.png) [Kiel Canal](/Kiel_Canal "Kiel Canal"), [Panama Canal](/Panama_Canal "Panama Canal") or [Suez Canal](/Suez_Canal "Suez Canal") also provides **+1**/**+2**/**+3**/**+5%** global trade power each

### Merchant bonus\[[edit](/index.php?title=Trade&veaction=edit&section=29 "Edit section: Merchant bonus") | [edit source](/index.php?title=Trade&action=edit&section=29 "Edit section: Merchant bonus")\]

If no merchant is currently collecting outside the home node, then the home node receives a **+10%** bonus to trade power for _each_ merchant who is steering trade. This is a _cumulative_ bonus, hence it is a big decision and sometimes hard to make the analysis depending on whether one should collect in other nodes or only steer trade. The quickest check is to compare the trade value in your income tab before and after your proposed changes; keeping the combination with the highest final result to your trade income. At most you'll lose some income during the envoy travel time of the merchants while experimenting.

Note that during times of war when they embargo your home node, and hence siphon your income, set some of the other upstream nodes to rather collect trade than to steer to the home node. This will avoid losing much of your trade income during the war.

### Domestic trade power\[[edit](/index.php?title=Trade&veaction=edit&section=30 "Edit section: Domestic trade power") | [edit source](/index.php?title=Trade&action=edit&section=30 "Edit section: Domestic trade power")\]

A country's home node and nodes where a nation has the highest _provincial trade power_ are considered _domestic_. Provinces in territories and trade companies can still be domestic. [![Trade power.png](/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Domestic_trade_power "Domestic trade power") _Domestic trade power_ refers to trade power in these nodes.

Certain ideas and policies improve domestic trade power.

[![Trade power.png](/images/thumb/1/10/Trade_power.png/24px-Trade_power.png)](/Domestic_trade_power "Domestic trade power")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

*   Muiscan traditions

*   Ashikaga idea 4: Tosen-bugyo
*   Beloozero idea 4: Northern Trade
*   Cascadian idea 5: Nookta Sound Trading
*   Ferraran idea 5: Resisting Venetian Control
*   Hungarian idea 6: Strengthen the Towns
*   Iroquois idea 3: Keepers of the Eastern Door
*   Lur idea 2: Jadda-ye Atabak
*   Rigan idea 3: Monopoly Rights
*   So idea 1: Wakan
*   Timurid idea 6: Control of the Silk Road
*   Transoxianian idea 6: Entrepôt of the Silk Road
*   Zambezi idea 3: Control of the Zambezi Trade

—

—

+20%

—

*   Ando idea 2: Ainu Trade
*   Danish idea 2: Sound Dues
*   Mutapan idea 7: Controlling the Mutapan Riches
*   Offaly idea 3: River Trade
*   Ouchi idea 2: Korean Trade
*   Ragusan idea 2: Center of Trade
*   Trebizond idea 6: Terminus of the Silk Road
*   Tunisian idea 6: Export Monopolies

*   Bornean ambition

—

+15%

—

*   Crimean idea 2: Slavers of the Steppe
*   Leinster idea 2: The Black Rent
*   Lüneburger idea 1: Hanseatic Contacts
*   Medri Bahri idea 6: Promote the Red Sea Trade
*   Munster idea 1: North Sea Fishermen
*   Otomo idea 4: Welcoming the Nanban Trade
*   Utsunomiya idea 3: Barrier of Shirakawa

—

—

+10%

*   Afghan traditions
*   Danziger traditions
*   Hausan traditions
*   K'iche traditions
*   Kono traditions

*   Baluch idea 5: Control the Overland Trade
*   Delhian idea 6: Protect the Grand Trunk Road
*   French Ducal idea 1: Men of Trade
*   Frisian idea 7: Brothers in Arms
*   German idea 2: Frühlings- und Herbstmesse
*   Granada idea 4: Strait of Gibraltar
*   Gujarati Princedom idea 2: Establish New Trading Ports
*   Hejazi idea 2: Red Sea Trade
*   Isshiki idea 1: Shugo of Tango
*   Shan idea 4: Control of the Gem Trade
*   Siberian idea 2: Siberian Fur Trade
*   Sistani idea 5: Overland Trade Routes
*   Telugu idea 7: Encourage Coromandel Trade

*   Butuan ambition
*   Shoni ambition
*   Sinhalese ambition
*   Yarkandi ambition

*   Horde-Trade: Passport to Merchants

Winning a [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament debate "Restricts Imports" provides **+5%** domestic trade power bonus for 10 years.

### Trade power abroad\[[edit](/index.php?title=Trade&veaction=edit&section=31 "Edit section: Trade power abroad") | [edit source](/index.php?title=Trade&action=edit&section=31 "Edit section: Trade power abroad")\]

Trade nodes that are not _domestic_ are considered _abroad_ and will suffer from over-extension penalties. [![Trade power abroad.png](/images/thumb/a/a9/Trade_power_abroad.png/28px-Trade_power_abroad.png)](/Trade_power_abroad "Trade power abroad") _Trade power abroad_ refers to trade power in these nodes. [![Overextension.png](/images/0/0b/Overextension.png)](/Overextension "Overextension") Overextension imposes a penalty of [![Trade power abroad.png](/images/thumb/a/a9/Trade_power_abroad.png/28px-Trade_power_abroad.png)](/Trade_power_abroad "Trade power abroad") **−1%** trade power abroad per percentage point.

Trade power abroad receives the following bonuses:

[![Trade power abroad.png](/images/thumb/a/a9/Trade_power_abroad.png/24px-Trade_power_abroad.png)](/Trade_power_abroad "Trade power abroad")

Traditions

Ideas

Bonuses

ExpandPolicies

+30%

—

—

—

*   Aristocratic-Trade: Trade Connections Policy

+25%

—

*   Livonian idea 3: Hanseatic Cities

—

—

+15%

—

*   Dalmatian idea 2: The Dalmatian Principalities

—

—

+10%

*   Hadramhi traditions
*   Hanoverian traditions
*   Hormuz traditions
*   Ragusan traditions

*   Couronian idea 3: Duchy of Mercantilism
*   Eora idea 7: Berewaldal
*   Genoese idea 3: Rebuilding Genoese Trade
*   Hosokawa idea 3: Sakai City
*   Ionian idea 6: Entrepôt of the Eastern Mediterranean
*   Larrakia idea 1: The Makassarian Trade

—

—

Winning a [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament debate "Charter Trade Company" provides **+5%** trade power abroad bonus for 10 years.

### Mercantilism\[[edit](/index.php?title=Trade&veaction=edit&section=32 "Edit section: Mercantilism") | [edit source](/index.php?title=Trade&action=edit&section=32 "Edit section: Mercantilism")\]

[![Mercantilism.png](/images/thumb/0/05/Mercantilism.png/28px-Mercantilism.png)](/File:Mercantilism.png) Mercantilism, which is capped at 100, provides the following bonuses[\[3\]](#cite_note-3) (per percentage point):

[![Provincial trade power modifier.png](/images/thumb/9/94/Provincial_trade_power_modifier.png/28px-Provincial_trade_power_modifier.png)](/Provincial_trade_power_modifier "Provincial trade power modifier")

**+2%**.00

Provincial trade power modifier

[![Embargo efficiency.png](/images/thumb/8/87/Embargo_efficiency.png/28px-Embargo_efficiency.png)](/Embargo_efficiency "Embargo efficiency")

**+1%**0

Embargo efficiency

[![Burghers loyalty equilibrium.png](/images/thumb/e/e5/Burghers_loyalty_equilibrium.png/28px-Burghers_loyalty_equilibrium.png)](/Burghers_loyalty_equilibrium "Burghers loyalty equilibrium")

**+0.1%**

Burghers loyalty equilibrium

[![Vaishyas loyalty equilibrium.png](/images/thumb/2/2a/Vaishyas_loyalty_equilibrium.png/28px-Vaishyas_loyalty_equilibrium.png)](/Vaishyas_loyalty_equilibrium "Vaishyas loyalty equilibrium")

**+0.1%**

Vaishyas loyalty equilibrium

But mercantilism also increases the [![Liberty desire.png](/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire") liberty desire in [![Subject colony icon.png](/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation") colonial subjects by **+0.25%** per percentage point.[\[4\]](#cite_note-4)

While most nations start the campaign with a base value of [![Mercantilism.png](/images/thumb/0/05/Mercantilism.png/28px-Mercantilism.png)](/File:Mercantilism.png) **10%** mercantilism, a handful of nations begin with a higher starting base of **25%**:

*    [![Flag of Aachen](/images/thumb/c/ca/Aachen.png/20px-Aachen.png)](/Aachen "Aachen") [Aachen](/Aachen "Aachen")
*    [![Flag of Biapas](/images/thumb/f/fb/Biapas.png/20px-Biapas.png)](/Biapas "Biapas") [Biapas](/Biapas "Biapas")
*    [![Flag of Bologna](/images/thumb/8/8d/Bologna.png/20px-Bologna.png)](/Bologna "Bologna") [Bologna](/Bologna "Bologna")
*    [![Flag of Bremen](/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen")
*    [![Flag of Dalmatia](/images/thumb/d/d3/Dalmatia.png/20px-Dalmatia.png)](/Dalmatia "Dalmatia") [Dalmatia](/Dalmatia "Dalmatia")
*    [![Flag of Danzig](/images/thumb/4/4e/Danzig.png/20px-Danzig.png)](/Danzig "Danzig") [Danzig](/Danzig "Danzig")
*    [![Flag of Dortmund](/images/thumb/0/08/Dortmund.png/20px-Dortmund.png)](/Dortmund "Dortmund") [Dortmund](/Dortmund "Dortmund")
*    [![Flag of England](/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England")
*    [![Flag of Florence](/images/thumb/d/d9/Florence.png/20px-Florence.png)](/Florence "Florence") [Florence](/Florence "Florence")
*    [![Flag of Frankfurt](/images/thumb/7/75/Frankfurt.png/20px-Frankfurt.png)](/Frankfurt "Frankfurt") [Frankfurt](/Frankfurt "Frankfurt")
*    [![Flag of Genoa](/images/thumb/f/fc/Genoa.png/20px-Genoa.png)](/Genoa "Genoa") [Genoa](/Genoa "Genoa")
*    [![Flag of Gilan](/images/thumb/6/6a/Gilan.png/20px-Gilan.png)](/Gilan "Gilan") [Gilan](/Gilan "Gilan")
*    [![Flag of Goslar](/images/thumb/a/af/Goslar.png/20px-Goslar.png)](/Goslar "Goslar") [Goslar](/Goslar "Goslar")
*    [![Flag of Gotland](/images/thumb/2/2c/Gotland.png/20px-Gotland.png)](/Gotland "Gotland") [Gotland](/Gotland "Gotland")
*    [![Flag of Hamburg](/images/thumb/e/e6/Hamburg.png/20px-Hamburg.png)](/Hamburg "Hamburg") [Hamburg](/Hamburg "Hamburg")
*    [![Flag of Konstanz](/images/thumb/f/f9/Konstanz.png/20px-Konstanz.png)](/Konstanz "Konstanz") [Konstanz](/Konstanz "Konstanz")
*    [![Flag of Lübeck](/images/thumb/0/09/L%C3%BCbeck.png/20px-L%C3%BCbeck.png)](/L%C3%BCbeck "Lübeck") [Lübeck](/L%C3%BCbeck "Lübeck")
*    [![Flag of Lucca](/images/thumb/8/87/Lucca.png/20px-Lucca.png)](/Lucca "Lucca") [Lucca](/Lucca "Lucca")
*    [![Flag of Memmingen](/images/thumb/0/08/Memmingen.png/20px-Memmingen.png)](/Memmingen "Memmingen") [Memmingen](/Memmingen "Memmingen")
*    [![Flag of Novgorod](/images/thumb/5/5e/Novgorod.png/20px-Novgorod.png)](/Novgorod "Novgorod") [Novgorod](/Novgorod "Novgorod")
*    [![Flag of Nuremberg](/images/thumb/8/87/Nuremberg.png/20px-Nuremberg.png)](/Nuremberg "Nuremberg") [Nuremberg](/Nuremberg "Nuremberg")
*    [![Flag of Perugia](/images/thumb/5/55/Perugia.png/20px-Perugia.png)](/Perugia "Perugia") [Perugia](/Perugia "Perugia")
*    [![Flag of Pisa](/images/thumb/8/85/Pisa.png/20px-Pisa.png)](/Pisa "Pisa") [Pisa](/Pisa "Pisa")
*    [![Flag of Pskov](/images/thumb/5/53/Pskov.png/20px-Pskov.png)](/Pskov "Pskov") [Pskov](/Pskov "Pskov")
*    [![Flag of Ragusa](/images/thumb/e/e6/Ragusa.png/20px-Ragusa.png)](/Ragusa "Ragusa") [Ragusa](/Ragusa "Ragusa")
*    [![Flag of Regensburg](/images/thumb/0/0d/Regensburg.png/20px-Regensburg.png)](/Regensburg "Regensburg") [Regensburg](/Regensburg "Regensburg")
*    [![Flag of Rothenburg](/images/thumb/8/88/Rothenburg.png/20px-Rothenburg.png)](/Rothenburg "Rothenburg") [Rothenburg](/Rothenburg "Rothenburg")
*    [![Flag of Siena](/images/thumb/9/97/Siena.png/20px-Siena.png)](/Siena "Siena") [Siena](/Siena "Siena")
*    [![Flag of Tuscany](/images/thumb/b/b2/Tuscany.png/20px-Tuscany.png)](/Tuscany "Tuscany") [Tuscany](/Tuscany "Tuscany")
*    [![Flag of Ulm](/images/thumb/0/0c/Ulm.png/20px-Ulm.png)](/Ulm "Ulm") [Ulm](/Ulm "Ulm")
*    [![Flag of Venice](/images/thumb/e/e1/Venice.png/20px-Venice.png)](/Venice "Venice") [Venice](/Venice "Venice")

The button ‘Promote Mercantilism’ on the [![Tab domestic trade.png](/images/thumb/9/90/Tab_domestic_trade.png/28px-Tab_domestic_trade.png)](/Country_interface#Trade "Country interface#Trade") [trade tab](/Country_interface#Trade "Country interface") increases mercantilism by **1%** for [![Diplomatic power.png](/images/d/da/Diplomatic_power.png)](/Diplomatic_power "Diplomatic power") **100** diplomatic power (only with [![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum") [Mare Nostrum](/Mare_Nostrum "Mare Nostrum") DLC enabled). This cost can be reduced by **20%** with the Horde-Trade policy: Passport to Merchants.

Certain decisions, privileges and other actions affect mercantilism:

[![Mercantilism.png](/images/thumb/0/05/Mercantilism.png/28px-Mercantilism.png)](/File:Mercantilism.png)

Condition

**+10%**

*    [![Flag of England](/images/thumb/2/21/England.png/20px-England.png)](/England "England")English decision: “[Designate Calais as The Staple Port](/England#Designate_Calais_as_The_Staple_Port "England")”

**+5%**

*   [![Chinese technology group](/images/thumb/3/37/Chinese.png/28px-Chinese.png)](/Technology_group "Chinese technology group") Chinese technology group decision: “[Close Foreign Trade](/List_of_decision_lists#Close_Foreign_Trade "List of decision lists")”

**+3%**

*   granting [![Burghers.png](/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers "Burghers") Burghers, [![Vaishyas.png](/images/thumb/5/5d/Vaishyas.png/28px-Vaishyas.png)](/Vaishyas "Vaishyas") Vaishyas and [![Jains.png](/images/thumb/9/95/Jains.png/28px-Jains.png)](/Jains "Jains") Jains privilege [![Privilege make generous donation.png](/images/thumb/e/e3/Privilege_make_generous_donation.png/28px-Privilege_make_generous_donation.png)](/File:Privilege_make_generous_donation.png) “Exclusive Trade Rights”

**+2%**

*   with [![Parliament.png](/images/thumb/f/f9/Parliament.png/28px-Parliament.png)](/Parliament "Parliament") parliament getting the issue “Restrict Imports”

**+1%**

*   [![Anglican.png](/images/thumb/6/68/Anglican.png/28px-Anglican.png)](/Anglican "Anglican") Anglican nation in exchange for [![Church power.png](/images/thumb/f/fd/Church_power.png/28px-Church_power.png)](/Church_power "Church power")**−100** church power.
*   granting [![Burghers.png](/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers "Burghers") Burghers, [![Vaishyas.png](/images/thumb/5/5d/Vaishyas.png/28px-Vaishyas.png)](/Vaishyas "Vaishyas") Vaishyas and [![Jains.png](/images/thumb/9/95/Jains.png/28px-Jains.png)](/Jains "Jains") Jains privileges [![Privilege monopoly of goods cloth.png](/images/thumb/8/83/Privilege_monopoly_of_goods_cloth.png/28px-Privilege_monopoly_of_goods_cloth.png)](/File:Privilege_monopoly_of_goods_cloth.png) “Monopoly on Textiles”, [![Privilege monopoly of goods dyes.png](/images/thumb/1/1f/Privilege_monopoly_of_goods_dyes.png/28px-Privilege_monopoly_of_goods_dyes.png)](/File:Privilege_monopoly_of_goods_dyes.png) “Monopoly on Dyes”, [![Privilege monopoly of goods glass.png](/images/thumb/5/5a/Privilege_monopoly_of_goods_glass.png/28px-Privilege_monopoly_of_goods_glass.png)](/File:Privilege_monopoly_of_goods_glass.png) “Monopoly on Glass” and [![Privilege monopoly of goods paper.png](/images/thumb/6/62/Privilege_monopoly_of_goods_paper.png/28px-Privilege_monopoly_of_goods_paper.png)](/File:Privilege_monopoly_of_goods_paper.png) “Monopoly on Paper”
*   granting [![Nobility.png](/images/thumb/c/c8/Nobility.png/28px-Nobility.png)](/Nobility "Nobility") Nobility, [![Rajputs.png](/images/thumb/5/56/Rajputs.png/28px-Rajputs.png)](/Rajputs "Rajputs") Rajputs and [![Marathas](/images/thumb/9/94/Marathas_estate.png/28px-Marathas_estate.png)](/Marathas_estate "Marathas") Marathas privileges [![Privilege monopoly of goods iron.png](/images/thumb/6/69/Privilege_monopoly_of_goods_iron.png/28px-Privilege_monopoly_of_goods_iron.png)](/File:Privilege_monopoly_of_goods_iron.png) “Monopoly on Mining and Smelting”, [![Privilege monopoly of goods livestock.png](/images/thumb/4/41/Privilege_monopoly_of_goods_livestock.png/28px-Privilege_monopoly_of_goods_livestock.png)](/File:Privilege_monopoly_of_goods_livestock.png) “Monopoly on Livestock” and [![Privilege monopoly of goods gems.png](/images/thumb/3/3b/Privilege_monopoly_of_goods_gems.png/28px-Privilege_monopoly_of_goods_gems.png)](/File:Privilege_monopoly_of_goods_gems.png) “Monopoly on Gemstones”
*   granting [![Clergy.png](/images/thumb/0/0e/Clergy.png/28px-Clergy.png)](/Clergy "Clergy") Clergy and [![Brahmins.png](/images/thumb/f/f2/Brahmins.png/28px-Brahmins.png)](/Brahmins "Brahmins") Brahmins privileges [![Privilege monopoly of goods incence.png](/images/thumb/f/f2/Privilege_monopoly_of_goods_incence.png/28px-Privilege_monopoly_of_goods_incence.png)](/File:Privilege_monopoly_of_goods_incence.png) “Monopoly on Incense” and [![Privilege monopoly of goods wool.png](/images/thumb/3/3e/Privilege_monopoly_of_goods_wool.png/28px-Privilege_monopoly_of_goods_wool.png)](/File:Privilege_monopoly_of_goods_wool.png) “Monopoly on Wool”
*   granting [![Clergy.png](/images/thumb/0/0e/Clergy.png/28px-Clergy.png)](/Clergy "Clergy") Clergy privileges [![Privilege monopoly of goods wine.png](/images/thumb/5/53/Privilege_monopoly_of_goods_wine.png/28px-Privilege_monopoly_of_goods_wine.png)](/File:Privilege_monopoly_of_goods_wine.png) “Monopoly on Wine” and [![Privilege monopoly of goods slaves.png](/images/thumb/4/4d/Privilege_monopoly_of_goods_slaves.png/28px-Privilege_monopoly_of_goods_slaves.png)](/File:Privilege_monopoly_of_goods_slaves.png) “Monopoly on Slaves”
*   [![Catholicism](/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") Catholic nations with “Sanction Commercial Monopoly” papal action for [![Papal influence.png](/images/thumb/5/5f/Papal_influence.png/28px-Papal_influence.png)](/Papal_influence "Papal influence") **\-50** papal influence.

**−1%**

*   granting [![Burghers.png](/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers "Burghers") Burghers privilege [![Privilege give money.png](/images/thumb/e/e6/Privilege_give_money.png/28px-Privilege_give_money.png)](/File:Privilege_give_money.png) “Indebted to the Burghers”
*   granting [![Jains.png](/images/thumb/9/95/Jains.png/28px-Jains.png)](/Jains "Jains") Jains privilege [![Privilege loan interaction.png](/images/thumb/c/c9/Privilege_loan_interaction.png/28px-Privilege_loan_interaction.png)](/File:Privilege_loan_interaction.png) “Indebted to the Jains”
*   with [![Parliament.png](/images/thumb/f/f9/Parliament.png/28px-Parliament.png)](/Parliament "Parliament") parliament using the bribe “Promote Meritocracy"”

Many [![Msg event.png](/images/4/4e/Msg_event.png)](/Event "Event") events and [![Mission.png](/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") missions do this as well, e.g. [Novgorod](/Novgorod "Novgorod") can get **17%** or [Genoa](/Genoa "Genoa") **14%** mercantilism in total by completing missions.

### Trade steering\[[edit](/index.php?title=Trade&veaction=edit&section=33 "Edit section: Trade steering") | [edit source](/index.php?title=Trade&action=edit&section=33 "Edit section: Trade steering")\]

[![Trade steering.png](/images/thumb/b/b1/Trade_steering.png/28px-Trade_steering.png)](/Trade_steering "Trade steering") Trade steering has two effects:

*   Trade steering is applied as a multiplicative bonus to trade power used for steering when determining which outgoing node trade is steered to.
*   Additionally it is used to increase the trade value that a nation steers in a given direction. At a base rate, trade value steered towards the next node increases by 5%, however this is increased by the [![Trade steering.png](/images/thumb/b/b1/Trade_steering.png/28px-Trade_steering.png)](/Trade_steering "Trade steering") Trade steering of the steering nation. So for example, a nation with 100% [![Trade steering.png](/images/thumb/b/b1/Trade_steering.png/28px-Trade_steering.png)](/Trade_steering "Trade steering") increases the trade value by 10% of the base trade value it steers to the next node.

Trade steering is increased by certain ideas and policies.

[![Trade steering.png](/images/thumb/b/b1/Trade_steering.png/24px-Trade_steering.png)](/Trade_steering "Trade steering")

Traditions

Ideas

Bonuses

ExpandPolicies

+33%

*   Venetian traditions

*   Omani idea 1: Local Merchant Preference

—

—

+25%

*   Mamluk traditions

*   Trade idea 6: Trade Manipulation
*   East India idea 5: Intercontinental Trade
*   Malayan idea 6: Agreements with the Sea Nomads
*   Pomeranian idea 3: Northern Ports

—

*   Defensive-Trade: The Armed Neutrality Act

+20%

*   Bornean traditions
*   Ryukyuan traditions
*   So traditions

*   Aragonese idea 3: Mediterranean Trade
*   Brabant idea 4: Sugar Capital of Europe
*   East Frisian idea 7: The Emden Company
*   Huron idea 3: Birchbark Canoes
*   Ligori idea 4: Trade Primacy
*   Malaccan idea 5: Harbor Masters
*   Mapuche idea 4: Mapuche Weaving
*   Pattani idea 2: South China Sea Trade
*   Pskovian idea 7: Pskov Before All Others
*   Saluzzo idea 5: The Key to the House of Italy
*   Shimazu idea 6: Okinawa Trade

*   Danziger ambition
*   Hanseatic ambition
*   Norwegian ambition
*   Orissan ambition
*   Transylvanian ambition

*   Trade-Expansion: Encouragement of Merchant Navy

+15%

*   Somali traditions

*   Arabian idea 1: Indian Ocean Trade
*   Canadian idea 6: Legacy of the Empire
*   Luxembourg idea 3: The Moselle Trade
*   Ouchi idea 5: Mercantile Diplomacy
*   Somalian idea 2: African Silk Road

—

—

+10%

*   Breton traditions
*   Clanricarde traditions
*   Krakowian traditions
*   Malayan Sultanate traditions
*   Medri Bahri traditions
*   Traditions of The Hansa

*   Croatian idea 2: Pearl of the Adriatic
*   Granada idea 4: Strait of Gibraltar
*   Israeli idea 4: Jewish Trade Tradition
*   Javan idea 4: Pan-Asian Trade
*   Karelian idea 3: The Sestra River
*   Silesian idea 4: Raubritter
*   Sulawesi idea 1: Intra-Asian Trade Network
*   Sundanese idea 5: Pan-Asian Trade

—

—

+5%

—

*   National idea 6: Mercantile Status

—

—

*   Importantly each point of [![Navy tradition.png](/images/c/cd/Navy_tradition.png)](/Navy_tradition "Navy tradition") navy tradition increases trade steering by **1%**. This means that 100 navy tradition would boost trade steering by **+100%**, in fact doubling it.
*   With [![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum") [Mare Nostrum](/Mare_Nostrum "Mare Nostrum"), the leader of a [![Trade league.png](/images/thumb/a/a0/Trade_league.png/28px-Trade_league.png)](/Trade_league "Trade league") trade league gets **+2.5%** trade steering per member of the league (this as on top of each member providing **50%** of their trade power to the leader of the league). This means for example that 10 league members would provide **+25%** trade steering power (being 10 x **+2.5%**) to the merchant republic leading the league.

### Caravan power\[[edit](/index.php?title=Trade&veaction=edit&section=34 "Edit section: Caravan power") | [edit source](/index.php?title=Trade&action=edit&section=34 "Edit section: Caravan power")\]

[![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations")

Available only with the [Wealth of Nations](/Wealth_of_Nations "Wealth of Nations") DLC enabled.

_**Note:** The values are displayed under country modifiers of the government interface even without Wealth of Nations DLC, but without effect in the trade nodes._  

A nation steering from, towards or collecting (only in main trading port) an inland trade node receives bonus trade power. This bonus, called [![Caravan power.png](/images/thumb/a/ac/Caravan_power.png/24px-Caravan_power.png)](/File:Caravan_power.png) caravan power, is equal to ![{\textstyle {\frac {\text{total development}}{3}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/1df13fd02869405b457a3c07bdffeecf2108daed), up to a maximum of **+50**.

Caravan power is increased by certain ideas and policies and can exceed 50 with these bonus.

[![Caravan power.png](/images/thumb/a/ac/Caravan_power.png/24px-Caravan_power.png)](/Caravan_power "Caravan power")

Traditions

Ideas

Bonuses

ExpandPolicies

+33%

—

—

—

*   Naval-Influence: The Cooperation Act

+25%

—

*   Plutocratic idea 6: Free Cities
*   Trade idea 7: Fast Negotiations

—

—

+20%

*   Air traditions
*   Baden traditions
*   Dhundhari traditions
*   Lorraine traditions
*   Maravi traditions
*   Sadiyan traditions

*   Horde government idea 6: Watchers of the Silk Road
*   Berber idea 3: Trans-Saharan Trade
*   Caspian idea 4: Protect the Caspian Trade
*   Dali idea 2: The Tea-Horse Route
*   Hausan idea 4: Sarakunan Kasuwa
*   Khivan idea 3: Oasis of Merv
*   Moroccan idea 3: Trans-Saharan Trade
*   Nizhny Novgorod idea 1: At The Confluence Of Giants
*   Odoyev idea 7: Strengthen the Oka River Trade
*   Persian idea 4: Improve the Silk Road
*   Shirvani idea 5: Caspian Trade
*   Somalian idea 2: African Silk Road
*   Songhai idea 7: Trans-Sahara Trade
*   Tumbuka idea 5: Inter-African Trade
*   Yarkandi idea 1: Northern Silk Road

—

—

+15%

*   Pskovian traditions

*   Kangra idea 5: Strengthen the Mountain Trade

—

—

+10%

—

*   Nubian (minor) idea 4: Encourage Long-Distance Trade

—

—

[![Caravan power.png](/images/thumb/a/ac/Caravan_power.png/24px-Caravan_power.png)](/File:Caravan_power.png)

Conditions

**+10%**

with ‘[Mughal Diwan](/Mughal_Diwan "Mughal Diwan")’ government reform and assimilated Sudanese culture group

**+10**/**+20**/**+33%**

holding [![Great project ait benhaddou.png](/images/thumb/4/4c/Great_project_ait_benhaddou.png/48px-Great_project_ait_benhaddou.png)](/File:Great_project_ait_benhaddou.png) [Aït Benhaddou](/A%C3%AFt_Benhaddou "Aït Benhaddou") (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)

**+10**/**+20**/**+40%**

holding [![Great project bam citadel.png](/images/thumb/5/59/Great_project_bam_citadel.png/48px-Great_project_bam_citadel.png)](/File:Great_project_bam_citadel.png) [Bam Citadel](/Bam_Citadel "Bam Citadel") (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)

**−5%**

for each point of negative [![Stability.png](/images/thumb/a/ae/Stability.png/24px-Stability.png)](/Stability "Stability") stability

### Trade efficiency\[[edit](/index.php?title=Trade&veaction=edit&section=35 "Edit section: Trade efficiency") | [edit source](/index.php?title=Trade&action=edit&section=35 "Edit section: Trade efficiency")\]

Trade efficiency is added as a bonus modifier to [trade income](/Trade#Trade_income "Trade"). Base trade efficiency is defined by diplomatic technology but it can also be increased by certain ideas and policies (capped at **+200%**).

[![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/24px-Trade_efficiency.png)](/File:Trade_efficiency.png)

[![Diplomatic technology.png](/images/thumb/2/22/Diplomatic_technology.png/24px-Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology") Diplomatic technology

**+2%**

level 3

**+4%**

level 5

**+6%**

level 10

**+8%**

level 13

**+10%**

level 16

**+12%**

level 20

**+14%**

level 24

**+16%**

level 28

**+18%**

level 30

**+20%**

level 32

[![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/24px-Trade_efficiency.png)](/File:Trade_efficiency.png)

National modifiers

**+20%**

[![Diplomatic technology.png](/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology") Diplomatic technology: _Ahead of time_

**+10%**

*   [ruler](/Ruler "Ruler") with [![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/28px-Trade_efficiency.png)](/Entrepreneur "Entrepreneur") ‘Entrepreneur’ personality
*   [![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Constitutional Republic
*   [![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Dutch Republic
*   [![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Free City
*   [![Government republic.png](/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Trading City
*   [![Advisor Trader.png](/images/thumb/e/e8/Advisor_Trader.png/24px-Advisor_Trader.png)](/Trader "Trader") Trader as advisor
*   [![Zoroastrianism.png](/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Zoroastrian religion
*   [![Norse Deity Njord](/images/thumb/9/9d/Njord.png/28px-Njord.png)](/Njord "Njord") Njord deity ([![Norse.png](/images/thumb/c/ce/Norse.png/24px-Norse.png)](/Norse "Norse") Norse religion)
*   [![Hindu Deity Surya](/images/thumb/0/0b/Surya.png/28px-Surya.png)](/Surya "Surya") Surya deity ([![Hinduism](/images/thumb/1/1a/Hinduism.png/24px-Hinduism.png)](/Hindu "Hindu") Hindu religion)
*   [![Monthly fervor.png](/images/thumb/7/71/Monthly_fervor.png/28px-Monthly_fervor.png)](/Monthly_fervor "Monthly fervor") Fervent focus on trade ([![Reformed.png](/images/thumb/3/3e/Reformed.png/24px-Reformed.png)](/Reformed "Reformed") Reformed religion)
*   [![Tengri](/images/thumb/9/9f/Tengri.png/24px-Tengri.png)](/Tengri "Tengri") Tengri religion syncretic faith [![Sunni Islam](/images/thumb/2/2f/Sunni.png/28px-Sunni.png)](/Sunni "Sunni") Sunni

**+10%**

*   [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") Parliament debate: _Reduce trade regulations_ for 10 years.
*   with discovered ‘[East Indian Trade Route](/East_Indian_Trade_Route "East Indian Trade Route")’

**+20%** **−10%**

[![Burghers.png](/images/thumb/d/dd/Burghers.png/24px-Burghers.png)](/Burghers "Burghers") Burghers estate  
(depends on influence and loyalty)

**+5**/**+10%**

holding [![Great project ait benhaddou.png](/images/thumb/4/4c/Great_project_ait_benhaddou.png/48px-Great_project_ait_benhaddou.png)](/File:Great_project_ait_benhaddou.png) [Aït Benhaddou](/A%C3%AFt_Benhaddou "Aït Benhaddou") at [![Great project level icon tier 2.png](/images/thumb/5/51/Great_project_level_icon_tier_2.png/24px-Great_project_level_icon_tier_2.png)](/File:Great_project_level_icon_tier_2.png) Significant or [![Great project level icon tier 3.png](/images/thumb/0/0d/Great_project_level_icon_tier_3.png/24px-Great_project_level_icon_tier_3.png)](/File:Great_project_level_icon_tier_3.png) Magnificent level (requires [![Leviathan.png](/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan)

**−5%**

for every [![Embargoing.png](/images/thumb/c/c8/Embargoing.png/28px-Embargoing.png)](/File:Embargoing.png) embargo against non-rival countries

**−10%**

*   ruler with [![Indulgent.png](/images/thumb/1/1c/Indulgent.png/28px-Indulgent.png)](/Indulgent "Indulgent") ‘Indulgent’ personality
*   during the [![Aristocratic Coup.png](/images/thumb/3/31/Aristocratic_Coup.png/28px-Aristocratic_Coup.png)](/Aristocratic_Coup "Aristocratic Coup") Aristocratic Coup disaster

[![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/24px-Trade_efficiency.png)](/File:Trade_efficiency.png)

Local modifiers

**+10%**

[![Trade office.png](/images/thumb/f/f3/Trade_office.png/28px-Trade_office.png)](/File:Trade_office.png) [merchant](/Trade#Merchant_actions "Trade") present

[![Trade efficiency.png](/images/thumb/3/31/Trade_efficiency.png/24px-Trade_efficiency.png)](/Trade_efficiency "Trade efficiency")

Traditions

Ideas

Bonuses

ExpandPolicies

+20%

*   Hanseatic traditions

*   Venetian idea 3: Stato da Màr

*   Zimbabwe ambition

—

+15%

*   Dalmatian traditions

*   Aksumite idea 6: Trade Hub
*   Malayan idea 3: Expert Hagglers
*   Portuguese idea 5: Encourage the Bandeirantes
*   Tuscan idea 5: Porto Franco

*   Dutch ambition

*   Trade-Quality: Cloth Quality Edict

+10%

*   Adalite traditions
*   Ando traditions
*   Aragonese traditions
*   Beloozero traditions
*   Butuan traditions
*   Canadians traditions
*   Danziger traditions
*   Genoese traditions
*   Irish traditions
*   Italian (minor) traditions
*   Kongo traditions
*   Krakowian traditions
*   Larrakia traditions
*   Neapolitan traditions
*   Nuremberger traditions
*   Ragusan traditions
*   Shoni traditions
*   Sinhalese traditions
*   So traditions
*   Württemberger traditions
*   Yarkandi traditions

*   Trade idea 4: National Trade Policy
*   Air idea 1: The Taghlamt
*   Al-Haasa idea 5: Entrepot of India
*   Anatolian idea 5: Caravanserais
*   Arakanese idea 7: Arakanese Trade Contracts
*   Bahmani idea 4: Karimis
*   Banteni idea 3: From East to West
*   Barbary Corsair idea 1: The Barbary Slave Trade
*   Bengal Sultanate idea 1: Combat Coastal Piracy
*   Bengali idea 2: Ganges-Brahmaputra Confluence
*   Beninese idea 7: Regulation of Trade
*   Berber idea 3: Trans-Saharan Trade
*   Bornean idea 1: Earliest Indic State
*   Bremen idea 4: Free Imperial City of Bremen
*   Bruneian idea 7: Merchant Alliances
*   Burgundian idea 5: Integrate the Towns in the Estates General
*   Butua idea 7: Vashambadzi
*   Carib idea 1: River Trade
*   Cham idea 6: Agarwood
*   Chickasaw idea 5: Slave Raids
*   Circassian idea 3: Circassian Grain Trade
*   Clanricarde idea 1: The Fourteen Tribes
*   East Frisian idea 6: Autonomous Burghers
*   East India idea 6: Colonial Monopoly
*   English idea 4: The Navigation Acts
*   Franconian idea 2: Trading on the Main
*   Gelre idea 2: Hanseatic Towns
*   Great Ming idea 5: Restore the Salt Monopoly
*   Greek idea 5: Control the Mediterranean Trade
*   Gujarat Sultanate idea 6: Foreign Merchants set up Factories
*   Hadramhi idea 4: Encouraging the Incense Trade
*   Hormuz idea 1: A Vast Emporium
*   Imagawa idea 2: Control of Tokaido
*   Imperial German idea 4: The New Hanseatic League
*   Ionian idea 4: Gate to the Adriatic
*   Israeli idea 4: Jewish Trade Tradition
*   Javan idea 7: Terracotta Banking System
*   Kaffan idea 7: Trade Reform
*   Kazani idea 7: End Western Domination
*   Khivan idea 5: Amu Darya
*   Khmer idea 4: River Trade
*   Khorasani idea 7: Protect the Caravan Routes
*   Kongolese idea 7: The Ivory Trade
*   Ladakh idea 7: Invite Far-Away Traders
*   Laotian idea 6: Southern Silk Road
*   Latgalian idea 1: Daugava River Trade
*   Lotharingian idea 3: Wealth of the Low Countries
*   Majapahit idea 3: The Maritime Silk Road
*   Malagasy idea 6: Control of the Foreign Traders
*   Malian idea 7: West African Slave Trade
*   Malvi idea 3: Protect the Delhi-Surat Trade Route
*   Mamluk idea 7: Monopoly Ports
*   Medri Bahri idea 1: Kings of the Sea
*   Mogadishan idea 5: Mogadishan Currency
*   Moldavian idea 7: Moldavian Trade
*   Moluccan idea 1: The Spice Islands
*   Moroccan idea 3: Trans-Saharan Trade
*   Mutapan idea 6: Curva
*   Nizhny Novgorod idea 6: Open Up The River Trade
*   Omani idea 4: Port Security Improvements
*   Orissan idea 6: Encourage the Salt Trade
*   Ottoman idea 6: Tulip Period
*   Pegu idea 1: Riches of Pegu
*   Permian idea 4: Great Perm
*   Polotskian idea 5: Trade Hub
*   Pomeranian idea 6: Dominate the Baltic
*   Pueblo idea 4: Cotton Weaving
*   Punjabi idea 2: Encourage Indo-Persian Trade
*   Rajput idea 7: Rajput Trading Houses
*   Rassid idea 7: Secure the Yemeni Trading Monopolies
*   Rigan idea 2: Hanseatic Port of Riga
*   Rostov idea 4: Entrepot of Russia
*   Ryukyuan idea 5: Sign Trade Agreements
*   Sadiyan idea 5: Dihang
*   Samtskhe idea 5: Protect the Trade Routes
*   Scandinavian idea 3: Danish Baltic Fleet
*   Siddi idea 6: Konkan Trade
*   Silesian idea 5: Via Regia
*   Sligonian idea 1: Promote the Trade
*   Somali idea 5: Indian Ocean Trade
*   Southeastern Woodlands idea 3: Refined Ceramics
*   Sukhothai idea 3: Sawankalok Ware
*   Sulu idea 4: Port of Jolo
*   Sumatran idea 1: Reliance on Trade
*   Swahili idea 1: Indian Ocean Trade
*   Tapuian idea 6: Open Trade Routes
*   Tarascan idea 3: Merchant-Officials
*   Theodoro idea 4: Port Avlita
*   Tirhuti idea 2: Gateway to India
*   Tverian idea 1: Tverian Merchants
*   Utrecht idea 4: The Vaartse Rijn
*   Vindhyan idea 6: Diamond Mines
*   Yemeni idea 3: Control of the Red Sea

*   Ambition of The Hansa
*   Andean ambition
*   Couronian ambition
*   Estonian ambition
*   Evenk ambition
*   Flemish ambition
*   Gujarati Princedom ambition
*   Gutnish ambition
*   Kono ambition
*   Ouchi ambition
*   Pagarruyung ambition
*   Pattani ambition
*   Perugian ambition
*   South Indian ambition
*   Sulawesi ambition
*   Tumbuka ambition

*   Divine-Trade: Solidarity
*   Innovative-Trade: The Banking System
*   Offensive-Trade: Public Road Act
*   Trade-Administrative: Importation Act
*   Trade-Economic: The Statute of Monopolies
*   Trade-Expansion: Encouragement of Merchant Navy

+5%

*   Huron traditions
*   Ulmer traditions

*   Bamberger idea 4: Little Venice
*   Danish idea 2: Sound Dues
*   German idea 2: Frühlings- und Herbstmesse
*   Lüneburger idea 3: Staple Rights
*   Mesoamerican idea 7: Obsidian and Jade
*   Pisan idea 6: Maritime's legacy
*   Tunisian idea 6: Export Monopolies
*   West African idea 6: The Great River

—

—

Embargo\[[edit](/index.php?title=Trade&veaction=edit&section=36 "Edit section: Embargo") | [edit source](/index.php?title=Trade&action=edit&section=36 "Edit section: Embargo")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

Embargoing is an option in the diplomacy screen that allows a country to leverage their trade power against another nation's, decreasing that nation's trade power in shared trade nodes. The trade screen shows icons for each nation embargoed and those embargoing your nation. Placing the mouse over each nation icon breaks down the penalties in each shared trade node.

Embargoing a country has the following effects:[\[5\]](#cite_note-5)

*   The defending country suffers a penalty to trade power in all trade nodes that both countries have power in. The base magnitude of the penalty is half of the attacker's trade power share in the trade node _before_ the embargo. This penalty stacks multiplicatively with other modifiers.
*   The defending country's opinion of the attacking country is modified by **−15**. The defender also gains a Trade Dispute casus belli against the attacker unless the embargo is mutual.
*   The attacking country's trade efficiency suffers a **−5%** trade efficency penalty unless the defender is a rival.
*   Embargoes do _not_ count against the Diplomatic Relation limit.
*   The attacking country gains up to [![Power projection.png](/images/8/8b/Power_projection.png)](/Power_projection "Power projection") **+10** power projection if the target is a rival, the amount depending on how severely the embargo affects the target's trade.

Winning a [![Parliament.png](/images/thumb/f/f9/Parliament.png/24px-Parliament.png)](/Parliament "Parliament") parliament debate "Issue Letters of Marque" provides **+10%** embargo efficiency for 10 years.

Each point of mercantilism provides **+0.5%** embargo efficiency, capped at **+50%**.

Embargo Efficiency can be increased by the following:

[![Embargo efficiency.png](/images/thumb/8/87/Embargo_efficiency.png/24px-Embargo_efficiency.png)](/Embargo_efficiency "Embargo efficiency")

Traditions

Ideas

Bonuses

ExpandPolicies

+25%

—

*   Vermont idea 2: The Boston Tea Party

—

—

+10%

—

*   Betsimisaraka idea 2: Pirate Ports
*   Cebu idea 5: 'The Place for Trading'
*   Cypriot idea 7: Raid Turkish Commerce
*   Malagasy idea 3: Pirate Ports
*   Mindanao idea 7: Pirates of Mindanao
*   Montenegrin idea 4: Balkan Gusars
*   Naxian idea 3: Archipelago Of Opportunities
*   Pomeranian idea 1: Legacy of Pirates

—

—

+5%

—

*   Palembang idea 3: Controlling the Strait

—

—

Privateering\[[edit](/index.php?title=Trade&veaction=edit&section=37 "Edit section: Privateering") | [edit source](/index.php?title=Trade&action=edit&section=37 "Edit section: Privateering")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Ambox outdated info.png](https://central.paradoxwikis.com/images/thumb/6/65/Ambox_outdated_info.png/22px-Ambox_outdated_info.png)

Please help with verifying or updating this section. It was last verified for [version](/Europa_Universalis_4_Wiki:Versioning "Europa Universalis 4 Wiki:Versioning") 1.25.

_Main article: [Naval warfare#Privateering](/Naval_warfare#Privateering "Naval warfare")_  

[![Wealth of Nations.png](/images/thumb/7/7d/Wealth_of_Nations.png/24px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations")[![El Dorado.png](/images/thumb/1/16/El_Dorado.png/24px-El_Dorado.png)](/El_Dorado "El Dorado")[![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/24px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum")[![Golden Century.png](/images/thumb/b/bb/Golden_Century.png/24px-Golden_Century.png)](/Golden_Century "Golden Century")

Available only with [Wealth of Nations](/Wealth_of_Nations "Wealth of Nations"), [El Dorado](/El_Dorado "El Dorado"), [Mare Nostrum](/Mare_Nostrum "Mare Nostrum") _or_ [Golden Century](/Golden_Century "Golden Century") DLC enabled.

Any fleet that contains light ships can be sent on a privateering mission to any trade node within trade range. The fleet will hoist the Jolly Roger and add the trade power of its light ships (plus a bonus) to a dummy "pirate" nation in the node, thus reducing the trade power share of everyone in the node – including their controller, though a portion of the trade value lost this way is returned to the controller, listed in accounts as "spoils of war". This effectively behaves as though they are collecting. Unlike protecting trade, privateers can be sent to nodes a nation has no power in, making it a way of weakening the nation's enemies or gaining revenue from nodes it can't touch otherwise. Privateering a rival's trade generates [power projection](/Power_projection "Power projection"). Privateers can also intercept [treasure fleets](/Treasure_fleet "Treasure fleet"), stealing a portion of the gold transported from a colonial nation.

### Hunt pirates\[[edit](/index.php?title=Trade&veaction=edit&section=38 "Edit section: Hunt pirates") | [edit source](/index.php?title=Trade&action=edit&section=38 "Edit section: Hunt pirates")\]

_Main article: [Naval warfare#Hunt pirates](/Naval_warfare#Hunt_pirates "Naval warfare")_  

[![Mare Nostrum.png](/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum")[![El Dorado.png](/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado")

Available only with the [Mare Nostrum](/Mare_Nostrum "Mare Nostrum") DLC _or_ the [El Dorado](/El_Dorado "El Dorado") DLC enabled.

This mission is available to fleets which contain at least one ship that isn't a transport. Fleets containing heavy ships or light ships may hunt pirates in any non-inland [trade node](/Trade_node "Trade node"); however, fleets containing only galleys (as well as fleets which are a mixture of galleys and transports) can only hunt pirates in nodes where all nearby sea provinces are [inland seas](/Trade_nodes#Nodes "Trade nodes").

Pirate-hunting fleets reduce the trade power taken by the dummy "pirates" nation in the chosen trade node by reducing their [privateer efficiency](/Privateer_efficiency "Privateer efficiency"). They do not actually damage or take damage from any ships.

Strategies\[[edit](/index.php?title=Trade&veaction=edit&section=39 "Edit section: Strategies") | [edit source](/index.php?title=Trade&action=edit&section=39 "Edit section: Strategies")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Strategy](/images/thumb/a/a2/Years_of_separatism.png/36px-Years_of_separatism.png "Strategy") _The below is **one of many** player suggested strategies for **Trade**. Bear in mind, due to the dynamic nature of the game, it may unfold differently for other players._

Effectively managing trade is key to give a nation the economic edge it needs to both survive and gain an advantage over its neighbours. Therefore, knowing how to both optimise one's trade income and undermine its competitors' income is instrumental in securing most of the game's objectives, both militarily and economically.

### Secure the home node\[[edit](/index.php?title=Trade&veaction=edit&section=40 "Edit section: Secure the home node") | [edit source](/index.php?title=Trade&action=edit&section=40 "Edit section: Secure the home node")\]

While most great oriental nations (Mamluks, Ottomans and Ming), and those dominating the end nodes (England, Aragon/Spain, Venice), do not struggle in controlling their home trade nodes, for other countries, it is often a nightmare to merely secure the trade benefits that derive from their production. Several steps must therefore be taken by all nations, in order to assert their control over the trade transiting from their territory, as without it, most of their growth will feed other nations' economies.

*   _Choose carefully the location_. One elementary step is to look carefully at the current nodes and the streams that go in and out of them. For instance, most land trade nodes will have a hoard of nations with caravans within them, and should therefore be avoided as building up a consequent share of the trade power there will require far too extensive resources at first. Also take into account your expansion plans, and try to pick the coastal node where you hold significant power located the most downstream from all your present and future possessions. Finally, check for any powerful country that holds trade power in the nodes you're targeting, as dislodging them may be very difficult if starting small.
*   _Check for all the centers of trade within it_: In the node you have chosen, ensure that you hold enough centers of trade to build up your bonus trade power, once they'll be upgraded. Also check for the ones held by other countries. Your future wars should be waged at least in part to secure these centers of trade in order to further assert your dominance over the node, and in turn boost your income.
*   _Ensure that enough trade value can flow in it_: As you build your empire, you'll eventually reach other nodes. Ensuring that these are located upstream of your home node will earn you considerable wealth. Also, check for any upstream land node, where you'll be able to send your merchants. They will be far more effective there than in most coastal nodes, and this will help you earn good trade income right from the beginning of the game even if your starting region is devoid of valuable trade resources.

### Expand one node after another\[[edit](/index.php?title=Trade&veaction=edit&section=41 "Edit section: Expand one node after another") | [edit source](/index.php?title=Trade&action=edit&section=41 "Edit section: Expand one node after another")\]

With your home node chosen and secured, you should look at taking control of the upstream nodes. One should be particularly careful about securing one node after another, as extracting trade value from a node only to see it collected by a rival in the next one is both fruitless and dangerous. While expanding, keep in mind some of the following aspects:

*   _Go for the centers of trade first_: Even if said centers of trade aren't in a strategically important region or may be hard to defend, ensuring that you get to control these will significantly increase your trade power. Especially in company regions, asserting control of them will help you by both granting you truly massive trade power and undermining your rivals' efforts, as they also tend to aim these first.
*   _The coastline means everything_: It is also important to take into account that while monitoring trade in a rich land trade node may require extensive wars, simply going for the coastal nodes and taking all of their provinces if possible will be far more beneficial in the long run. Not only will they allow you to snippet away inland trade through merchants, they may also grant you the ability to "steal" the trade value other nations will have extracted farther upstream, as most of intercontinental trade flows through oceans and thus coastlines.
*   _Be greedy_: While going for trade domination, no effort should be spared to enact total control over the nodes you'll be targeting. Even if a nation isn't much of a threat, and you have more important issues to deal with, attacking and taking control of the most provinces possible is essential, especially in company zones. While you'll be distracted farther away, you may go back 10 years later and find out that your rivals bought off provinces or simply conquered their way in, ruining most of your precedent efforts. Special attention must be paid if you're planning to core your overseas conquests in order to boost your income, as short of the company total trade power bonus every province lost to a rival will severely compromise your hold. If you're approaching your governing capacity, remember you can make more room by building courthouses, especially in your most developed provinces (and a statehouse can be more valuable than a manufactory in a province with a bad trade good in a large, rich area).

### Develop and build\[[edit](/index.php?title=Trade&veaction=edit&section=42 "Edit section: Develop and build") | [edit source](/index.php?title=Trade&action=edit&section=42 "Edit section: Develop and build")\]

Once your income gets comfortable enough to allow you to stop conquering a bit and starting building up your provinces, there comes the time to build and develop your provinces.

*   _Go for the richest_: There is no use in maintaining a homogeneous development in all your provinces. Provinces producing trade goods worth 3.00 ducats or more should be the ones you'll be developing first. Even if they are overseas (as long as they are in [trade companies](/Trade_companies "Trade companies")), they can become very valuable very quickly, and you'll be able to use the newfound money for further development projects.
*   _Manufactories and workshops are the name of the game_: Even if tax income seems to be very lucrative, and in respect production income negligible, keep in mind that autonomy applies fully to tax, half to production income, and not at all to goods produced – and more goods produced also means more trade value created. With your control asserted over the node the province is in, your income will rise very quickly once these buildings have been built. Both buildings synergise very well, and it may often be worthwhile to demolish less important buildings (such as churches) to ensure that every valuable province at first, and later on every province, has both of these buildings. Despite their high cost, manufactories increases income from _both_ production and trade. Since a manufactory give the equivalent of +5 base production in the province it’s built in, you should only build manufactories based on the trade good and any local goods produced modifiers. The more expensive a trade good is, the better your manufactory will be and the quicker it will pay off.
*   _Strive to be the richest_: Using the **Trade Value** map mode, you can quickly check which of your provinces are the most advanced, and which ones have the most potential. By developing and building up in these, every single one of your provinces should, after a couple decades of attention, reach 10 or more trade value. Also check for [policies](/Policies "Policies") that increase both production and trade efficiency, as these may give you the decisive edge over your rivals you'll need.

With these principles in mind, you may be able, starting as any nation, to reach by late game the podium of the world's wealthiest nations. This, in turn, will ensure your continued survival throughout the game history and, as the Industrial Revolution closes in, put you in the best position possible to steamroll the world as its foremost industrial power.

See also\[[edit](/index.php?title=Trade&veaction=edit&section=43 "Edit section: See also") | [edit source](/index.php?title=Trade&action=edit&section=43 "Edit section: See also")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   [Trade nodes](/Trade_nodes "Trade nodes")
*   [Trade goods](/Trade_goods "Trade goods")
*   [Trade strategy](/Trade_strategy "Trade strategy")
*   [Production](/Production "Production")
*   [Tax](/Tax "Tax")

References\[[edit](/index.php?title=Trade&veaction=edit&section=44 "Edit section: References") | [edit source](/index.php?title=Trade&action=edit&section=44 "Edit section: References")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  ↑ [Jump up to: 1.0](#cite_ref-not_main_city_1-0) [1.1](#cite_ref-not_main_city_1-1) The penalty "Collect from Trade not in your Main Trade City" is multiplicative, but it's displayed as an additive modifier to trade power. This percentage is calculated as ![{\displaystyle {\frac {1+\sum {\text{other trade power modifiers}}}{2}}}](https://en.wikipedia.org/api/rest_v1/media/math/render/png/adbc6f52553d0df19404e82df64590460fc82708), which is equivalent to a **−50%** multiplicative modifier.
2.  [↑](#cite_ref-2 "Jump up") [https://youtu.be/mrMtnIasjSM](https://youtu.be/mrMtnIasjSM)
3.  [↑](#cite_ref-3 "Jump up") See in /Europa Universalis IV/common/static\_modifiers/00\_static\_modifiers.txt ([Static\_modifiers#Mercantilism](/Static_modifiers#Mercantilism "Static modifiers")).
4.  [↑](#cite_ref-4 "Jump up") See in /Europa Universalis IV/common/defines.lua.
5.  [↑](#cite_ref-5 "Jump up") [http://www.youtube.com/watch?v=3utb0ECjWDk](http://www.youtube.com/watch?v=3utb0ECjWDk)

**

Mechanics

**

*   [Economy](javascript:void(0); "Economy")
*   [External relations](javascript:void(0); "External relations")
*   [Internal country management](javascript:void(0); "Internal country management")
*   [Meta](javascript:void(0); "Meta")
*   [Technology](javascript:void(0); "Technology")
*   [War](javascript:void(0); "War")

Colonisation

[Exploration](/Discovery "Discovery") • [Colonisation](/Colonisation "Colonisation") • [Colonial nation](/Colonial_nation "Colonial nation") • [Tariffs](/Tariffs "Tariffs") • [Trade company](/Trade_company "Trade company")

Economy

[Debase currency](/Debase_currency "Debase currency") • [Development](/Development "Development") • [Economy](/Economy "Economy") • [Privateering](/Privateering "Privateering") • [Production](/Production "Production") • [Raid coasts](/Raid_coasts "Raid coasts") • [Tax](/Tax "Tax")

Trade

Trade • [Trade company](/Trade_company "Trade company") • [Trade goods](/Trade_goods "Trade goods") • [Trade nodes](/Trade_nodes "Trade nodes")

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

Declaring war

[Alliance](/Alliance "Alliance") • [Casus belli](/Casus_belli "Casus belli") • [Claim](/Claim "Claim") • [Peace](/Peace "Peace") • [War exhaustion](/War_exhaustion "War exhaustion") • [Warfare](/Warfare "Warfare")

Defense

[Fort](/Fort "Fort") • [Zone of control](/Zone_of_control "Zone of control")

Land warfare

[Army](/Army "Army") • [Condottieri](/Condottieri "Condottieri") • [Discipline](/Discipline "Discipline") • [Drilling](/Drilling "Drilling") • [Land units](/Land_units "Land units") • [Land warfare](/Land_warfare "Land warfare") • [Manpower](/Manpower "Manpower") • [Militarisation](/Militarisation "Militarisation") • [Mercenaries](/Mercenaries "Mercenaries") • [Professionalism](/Professionalism "Professionalism")

Naval warfare

[Flagship](/Flagship "Flagship") • [Naval blockade](/Naval_warfare#Blockading "Naval warfare") • [Naval doctrine](/Naval_doctrine "Naval doctrine") • [Naval units](/Naval_units "Naval units") • [Naval warfare](/Naval_warfare "Naval warfare") • [Navy](/Navy "Navy") • [Sailors](/Sailors "Sailors")

Other

[Force limit](/Force_limit "Force limit") • [Military leader](/Military_leader "Military leader") • [Military tradition](/Military_tradition "Military tradition")

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Trade&oldid=153865#Merchants](https://eu4.paradoxwikis.com/index.php?title=Trade&oldid=153865#Merchants)"

[Categories](/Special:Categories "Special:Categories"):

*   [Pages that use a deprecated format of the math tags](/index.php?title=Category:Pages_that_use_a_deprecated_format_of_the_math_tags&action=edit&redlink=1 "Category:Pages that use a deprecated format of the math tags (page does not exist)")
*   [Potentially outdated](/Category:Potentially_outdated "Category:Potentially outdated")
*   [1.25](/Category:1.25 "Category:1.25")
*   [Economy](/Category:Economy "Category:Economy")

Hidden category:

*   [Articles with potentially outdated sections](/Category:Articles_with_potentially_outdated_sections "Category:Articles with potentially outdated sections")