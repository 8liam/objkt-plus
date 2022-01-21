

var styles = `
        /* NORD THEME */
        /* lighter colour */
        body.dark .frow-container.full-width.height-100, body.dark div.modal-body, body.dark div.content, body.dark div.component-objkt-gallery-element {
            background-color: #3B4252 !important;
        }


        /* darker colour */
        body.dark .profile-menu.frow.column-start, body.dark button, body.dark, body.dark .toast-container .ngx-toastr {
            background-color: #2e3440 !important;
        }

        /*
        .tezos-symbol {
            color: white;
        }
        */
`

var styleSheet = document.createElement("style");
styleSheet.innerHTML = styles;
document.head.appendChild(styleSheet);

    window.onload = function load() {
        var url = window.location.href;
        // Function to be executed
            // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest()

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://api.coingecko.com/api/v3/coins/tezos?localization=false&   tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false',     true)

        // Callback function for when request is loaded
        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)

            // Find Tezos Price in USD and convert to string
            var tezos_price = data.market_data.current_price.usd;
            // check if tezos price is a single digit
            if (tezos_price % 1 == 0) {
                // add decimal places to the current price
                tezos_price += ".00";
            }
            $("div.search-bar").after ( `
            <span _ngcontent-ydd-c42 routerlink="mint" class="menu-button-explore" style="margin-left: 2rem;font-size: .9rem;font-weight: 400;opacity: .7;transition: opacity .1s ease-in-out;">ꜩ = $` + tezos_price + `</span>`);



        }

        // Send request
        request.send();

    }