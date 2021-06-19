import { Nav, NavItem, NavLink } from "reactstrap";

const Inventory = () => {
    const AvailableInventories = () => {
        return (
            <>
                <NavItem>
                    <NavLink>Character Backback</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Quiver</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Bag of holding</NavLink>
                </NavItem>
            </>
        );
    };

    return (
        <>
            <h1>Inventory Management</h1>
            <div className="inventorys">
                <Nav tabs>
                    {/* map over inventories available for the user in the campaign */}
                    <AvailableInventories />
                </Nav>
            </div>
            <div>

            </div>
            {/*<h2>Storage Types</h2>
            <p>Player Character</p>
            <p>NPC</p>
            <p>Storage</p>
            <h2>What makes an item</h2>
            <p>Item name</p>
            <p>type of gear</p>
            <p>Rarity / quality</p>
            <p>stacked equipement or listed individually</p>
            <p>if stackable qty</p>
            <p>description</p>
            <p>does item effect stats / abilities / add a feature</p> */}
        </>
    );
};

export default Inventory;
