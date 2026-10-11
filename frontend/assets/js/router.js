var app = $.spapp({
    defaultView  : "index",
    templateDir  : "./views/"
  });

app.route({ view: 'shop', load: 'shop.html' });
app.route({ view: 'find', load: 'find.html' });
app.route({ view: 'cart', load: 'cart.html'});
app.route({ view: 'login', load: 'login.html',onReady:function(){console.log('This is the login page.')}});

app.run();


//This JS is used for managing checkboxes. 
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const task = this.closest('.task');
            if (this.checked) {
                task.classList.add('completed');
            } else {
                task.classList.remove('completed');
            }
        });
    });
});

