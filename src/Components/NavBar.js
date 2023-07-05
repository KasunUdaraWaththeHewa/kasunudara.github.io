import './NavBar.css'
import React, { useEffect } from 'react';
import $ from 'jquery';

function NavBar(){
    useEffect(() => {
        // jQuery code for navigation menu
        $(function() {
          // Open and close nav
          $('#navbar-toggle').click(function() {
            $('nav ul').slideToggle();
          });
    
          // Hamburger toggle
          $('#navbar-toggle').on('click', function() {
            $(this).toggleClass('active');
          });
    
          // If a link has a dropdown, add sub menu toggle.
          $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.navbar-dropdown').slideToggle('slow');
    
            // Close dropdown when selecting another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide('slow');
            e.stopPropagation();
          });
    
          // Click outside the dropdown will remove the dropdown class
          $('html').click(function() {
            $('.navbar-dropdown').hide();
          });
        });
      }, []);
    return(
        <div>
            <section class="navigation">
                <div class="nav-container">
                    <div class="brand">
                    <a href="#!">Kasun Udara</a>
                    </div>
                    <nav>
                    <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                    <ul class="nav-list">
                        <li>
                        <a href="#!">Home</a>
                        </li>
                        <li>
                        <a href="#!">Projects</a>
                        </li>
                        <li>
                        <a href="#!">Achievements</a>
                        </li>
                        <li>
                        <a href="#!">Blogs</a>
                        </li>
                        <li>
                        <a href="#!">Contact-Me</a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
}
export default NavBar;