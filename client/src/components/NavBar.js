import React from "react";


function NavBar( {user, setUser } ) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
            }
        });
    }
    
    return (
        <div>
            <nav>
            <button variant="outline" onClick={handleLogoutClick}>
                Logout
            </button>
            </nav>
        </div>
    )
}


export default NavBar; 