const navbar = () => {
    return `<div id="logonddrpdn">
    <div id="logo" >
        <img src="./logo/new logo.png" alt="">
    </div>
    <div id="drpdwn">
        <button>
            <div>More Travel</div>
            <div class="chevhex">&#x3c;</div>
        </button>
    </div>
</div>
<div id="ak_navbar_sub_menu">
    <ul>
       <li><a href="hotel.html">
        <svg class="uitk-icon uitk-spacing uitk-spacing-padding-inlineend-three uitk-icon-medium"
        aria-hidden="true"
        id="drop_down_icon"
        viewBox="0 0 24 24" 
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="m21.61 21.41-.47-1.1a.49.49 0 0 0-.16-.2.4.4 0 0 0-.23-.06h-.84V7.4a.4.4 0 0 0-.12-.28.38.38 0 0 0-.29-.13h-3.75V2.41a.4.4 0 0 0-.12-.28.38.38 0 0 0-.29-.13H4.5a.38.38 0 0 0-.3.13.4.4 0 0 0-.11.28v17.64h-.84a.4.4 0 0 0-.23.07.49.49 0 0 0-.16.18l-.47 1.11a.44.44 0 0 0-.03.2c0 .08.03.14.07.2a.38.38 0 0 0 .33.2h18.48a.38.38 0 0 0 .33-.2.36.36 0 0 0 .07-.2c0-.06 0-.13-.03-.2zM9.09 17h-2.5v-2.5h2.5V17zm0-5h-2.5V9.5h2.5V12zm0-5h-2.5V4.5h2.5V7zm4.16 12.77h-2.5V14.5h2.5v5.27zm0-7.77h-2.5V9.5h2.5V12zm0-5h-2.5V4.5h2.5V7zm4.16 10h-2.5v-2.5h2.5V17zm0-5h-2.5V9.5h2.5V12z">
          </path>
      </svg>
      Stays
       </a></li>
       <li><a href="flight.html">
        <svg class="uitk-icon uitk-spacing uitk-spacing-padding-inlineend-three uitk-icon-medium" 
        aria-hidden="true" 
        width="24"
        id="drop_down_icon"
        height="24"
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="m3.64 14.26 2.86.95 4.02-4.02-8-4.59 1.16-1.16c.1-.1.26-.14.41-.1l9.3 2.98c1.58-1.58 3.15-3.2 4.77-4.75.31-.33.7-.58 1.16-.73.45-.16.87-.27 1.25-.34.55-.05.98.4.93.93-.07.38-.18.8-.34 1.25-.15.46-.4.85-.73 1.16l-4.75 4.78 2.97 9.29c.05.15 0 .29-.1.41l-1.17 1.16-4.57-8.02L8.8 17.5l.95 2.84L8.6 21.5l-2.48-3.62L2.5 15.4l1.14-1.14z"></path>
        </svg>
        Flights
      </a></li>
       <li><a href="#">
        <svg class="uitk-icon uitk-spacing uitk-spacing-padding-inlineend-three uitk-icon-medium" 
        aria-hidden="true" 
        width="24"
        id="drop_down_icon"
        height="24"
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M21.59 11.59h-2.36V8.66c0-.23-.2-.41-.43-.41h-5.82a.42.42 0 0 0-.43.41v2.93H10.2a.42.42 0 0 0-.43.41v8.34c0 .23.21.41.43.41h11.4c.21 0 .41-.2.41-.41V12c0-.23-.2-.41-.41-.41zm-7.36-1.68h3.32v1.68h-3.32V9.91zm3.79 9.06-1.2-1.17 2.37-2.36 1.17 1.17-2.34 2.36zM10.89 4.91V3.66a.4.4 0 0 0-.41-.41H4.64a.4.4 0 0 0-.41.41v2.93H2.4A.4.4 0 0 0 2 7v13.34c0 .2.18.41.41.41h5.7V10.34c0-.23.18-.43.41-.43h2.37v-5zM9.23 6.59H5.89V4.91h3.34v1.68z"></path>
      </svg>
      Packages</a></li>
       <li><a href="#">
        <svg class="uitk-icon uitk-spacing uitk-spacing-padding-inlineend-three uitk-icon-medium" 
        aria-hidden="true" 
        width="24"
        id="drop_down_icon"
        height="24"
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M21.86 11.16 20.2 9.62l-1.66-5.53a.39.39 0 0 0-.14-.21.4.4 0 0 0-.25-.08H5.85a.4.4 0 0 0-.25.08.4.4 0 0 0-.14.2l-1.8 5.54-1.54 1.54a.38.38 0 0 0-.1.14.44.44 0 0 0-.02.16v4.94l.03.15c.02.06.05.1.09.14l.72.7v2.37c0 .11.04.22.12.3.08.08.17.13.29.13h3.34c.12 0 .21-.05.3-.13a.43.43 0 0 0 .11-.3v-2.37h10v2.37c0 .11.04.22.12.3.08.08.17.13.29.13h3.34c.12 0 .21-.05.3-.13a.43.43 0 0 0 .11-.3v-2.37l.72-.7a.38.38 0 0 0 .1-.14l.02-.15v-4.92a.39.39 0 0 0-.04-.18.52.52 0 0 0-.1-.14zM6.8 5.46h10.4l1.25 4.16H5.54l1.25-4.16zm-.9 9.16a1.6 1.6 0 0 1-1.18-.49 1.6 1.6 0 0 1-.48-1.17c0-.46.16-.85.48-1.17a1.6 1.6 0 0 1 1.18-.49c.45 0 .84.16 1.17.49.32.32.49.71.49 1.17 0 .46-.17.85-.5 1.17a1.6 1.6 0 0 1-1.16.49zm12.22 0a1.6 1.6 0 0 1-1.17-.49 1.6 1.6 0 0 1-.49-1.17c0-.46.17-.85.5-1.17a1.6 1.6 0 0 1 1.16-.49c.46 0 .85.16 1.18.49.32.32.48.71.48 1.17 0 .46-.16.85-.48 1.17a1.6 1.6 0 0 1-1.18.49z"></path>
      </svg>
      Cars</a></li>
       <li><a href="#">
        <svg class="uitk-icon uitk-spacing uitk-spacing-padding-inlineend-three uitk-icon-medium" 
        aria-hidden="true" 
        viewBox="0 0 24 24" 
        width="24"
        id="drop_down_icon"
        height="24"
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M20.34 10.96v1.68c0 .13-.06.24-.14.32-2.21 1.99-3.51 4.72-4.58 7.45-.24.62-.4 1.05-.48 1.3a.4.4 0 0 1-.39.29h-5.5a.4.4 0 0 1-.4-.3c-.07-.24-.23-.67-.47-1.3-1.06-2.7-2.4-5.47-4.58-7.44a.44.44 0 0 1-.14-.32v-1.68c0-.18.11-.33.3-.4l6.5-2.17c.23-.05.54.08.54.35L12 16l1-7.26c0-.28.3-.4.54-.35l6.5 2.16c.19.08.3.23.3.41zM5.83 8.2 12 6.12l6.17 2.07-1.72-3.14h1.66l-.47-1.37a.4.4 0 0 0-.39-.3h-4.14v-.97c0-.23-.2-.41-.4-.41H11.3c-.21 0-.41.18-.41.41v.98H6.75a.4.4 0 0 0-.4.29L5.9 5.05h1.66L5.83 8.19z"></path>
      </svg>
      Crueses</a></li>
       <li><a href="#">
        <svg class="uitk-icon uitk-spacing uitk-spacing-padding-inlineend-three uitk-icon-medium" 
        aria-hidden="true" 
        viewBox="0 0 24 24" 
        width="24"
        id="drop_down_icon"
        height="24"
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M22 10.18V6H2v4.18c.9 0 1.66.75 1.66 1.66 0 .9-.76 1.66-1.66 1.66v4.18h20V13.5c-.9 0-1.66-.76-1.66-1.66 0-.9.76-1.66 1.66-1.66zm-4.16 4.57c0 .23-.2.43-.43.43H6.59a.43.43 0 0 1-.43-.43V8.93c0-.23.2-.43.43-.43h10.82c.23 0 .43.2.43.43v5.82zm-10-4.57h8.32v3.32H7.84v-3.32z"></path>
      </svg>
      Things to do</a></li>
       <li>Deals</li>
       <li>Groups and Meetings</li>
       <li>Travel Blog</li>
    </ul>
 </div>
<div id="navigate">
    <div>
        <p>Español</p>
    </div>
    <div>
        <p>List your property</p>
    </div>
    <div>
        <p>Support</p>
    </div>
    <div>
        <p>Trips</p>
    </div>
    <div>
        <p id="sign-in">Sign in</p>
    </div>
</div>`
}

export { navbar }