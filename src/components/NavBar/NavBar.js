import React from 'react';

function NavBar({ handleSearch }){
    
    return (
        <nav>
            <div>
                <form>
                    <input

                        type="search"
                        onChange={e => handleSearch(e)}

                    />


                </form>
            </div>
        </nav>

    );
};

export default NavBar;