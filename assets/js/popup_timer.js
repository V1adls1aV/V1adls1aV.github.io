const POPUP_DELAY = 30000;

document.addEventListener('DOMContentLoaded', () => {
    const proposalPopup = document.getElementById('proposal');

    function openProposalPopup() {
        proposalPopup.classList.add('opened-pop-up');
        document.body.classList.add("overlay");
        sessionStorage.setItem('hasProposalBeenShown', 'true');
    }

    function closeProposalPopup() {
        proposalPopup.classList.remove("opened-pop-up");
        document.body.classList.remove("overlay");
    }

    if (!sessionStorage.getItem('hasProposalBeenShown')) {
        setTimeout(() => {
            openProposalPopup();
    
            document.addEventListener('click', function closeOnClickOutside(e) {
                if (!proposalPopup.contains(e.target)) {
                    closeProposalPopup();
                    document.removeEventListener('click', closeOnClickOutside);
                }
            })
        }, POPUP_DELAY);
    }
});
