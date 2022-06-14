// expanded hamburger menu
const navMenu = document.querySelector('.nav-menu span');
const nav = document.querySelector('nav ul');

    navMenu.addEventListener('click', function () {
    nav.classList.toggle('expanded-menu');
    });

    //random color for classroom
    var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
    var boxes = document.querySelectorAll(".box");
    
    for (i = 0; i < boxes.length; i++) {
      // Pick a random color from the array 'colors'.
      boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      boxes[i].style.width = '100%';
      boxes[i].style.height = '10px';
      boxes[i].style.display = 'inline-block';
    }