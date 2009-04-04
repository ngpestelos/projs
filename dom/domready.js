<html>
  <head>
    <title>Testing DOM Loading (Again)</title>
    <script type="text/javascript">
      // Wait until the page is loaded

      function domReady(f) {
        // If the DOM is already loaded, execute the function right away
        if (domReady.done) return f();

        // If we're already added a function
        if (domReady.timer) {
          // Add it to the list of functions to execute
          domReady.ready.push(f);
        } else {
          // Attach an event for when the page finishes loading,
          // just in case it finishes first. Uses addEvent.
          addEvent(window, "load", isDOMReady);

          // Initialize the array of functions to execute
          domReady.ready = [f];

          // Check to see if the DOM is ready as quickly as possible
          domReady.timer = setInterval(isDomReady, 13);
        }
      }

      // Checks to see if the DOM is ready for navigation
      function isDOMReady() {
        // If we already figured out that the page is ready, ignore
        if (domReady.done) return false;

        // Check to see if a number of functions and elements are
        // able to be accessed
        if (document && document.getElementsByTagName &&
          document.getElementById && document.body) {
          
        }
      }
    </script>
  </head>
  <body>
    <h1>Testing DOM Loading</h1>
    <!-- Lots of HTML goes here -->
    <script type="text/javascript">init();</script>
  </body>
</html>
