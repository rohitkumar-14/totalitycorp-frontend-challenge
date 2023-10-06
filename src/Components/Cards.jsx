import React from "react";
import { SiWindows11 } from "react-icons/si";
import { RiWallet2Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { BiLineChart } from "react-icons/bi";

const Cards = () => {
  return (
    <div>
      <div class="card-container">
        <div class="card left-appear">
          <a href="#" class="logo-icon">
            <GoPerson />
          </a>

          <h2>Discover Top Artists & Creators</h2>
          <p>
            Explore beautiful digital art by talented artists from the world.
          </p>
        </div>
        <div class="card right-appear">
          <a href="#" class="logo-icon">
            <SiWindows11 />
          </a>

          <h2>Buy And Sell Your NFTs</h2>
          <p>Easily buy and sell your NFTs in the largest marketplace.</p>
        </div>
        <div class="card left-appear">
          <a href="#" class="logo-icon">
            <BiLineChart />
          </a>

          <h2>Grow Your Digital Art Collection</h2>
          <p>Add new, trending and rare artwork to your collection.</p>
        </div>
        <div class="card right-appear">
          <a href="#" class="logo-icon">
            <RiWallet2Line />
          </a>

          <h2>Earn Money By Trading NFTs</h2>
          <p>Get paid by selling NFTs with secured payment methods.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
