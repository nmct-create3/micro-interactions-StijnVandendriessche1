const handlePasswordSwitcher = function()
{
    const passwordInput = document.querySelector('.js-password-input');
    const passwordToggle = document.querySelector('.js-password-toggle');
    passwordToggle.addEventListener('change', function() 
    {
        if(passwordInput.type === 'text')
        {
            passwordInput.type = 'password';
        }
        else
        {
            passwordInput.type = 'text';
        }
    });
};

document.addEventListener("DOMContentLoaded", function()
{
    console.log("ik ben geladen");
    handlePasswordSwitcher();
});