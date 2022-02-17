import React from "react";
import {Link} from "react-router-dom";

export default function Barra(){
    return(
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Teste">Teste</Link>
            </li>
          </ul>
        </nav>
    )
}