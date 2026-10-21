// Assemble the email link on click so the address isn't sitting in the page source.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[data-user][data-domain]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = 'mailto:' + link.dataset.user + '@' + link.dataset.domain;
        });
    });
});
