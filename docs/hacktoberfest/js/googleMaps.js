const initMap = () => {
    let ufcg = {lat: -25.344, lng: 131.036}

    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: ufcg}
    )

    let marker = new google.maps.Marker({position: ufcg, map: map})
}
