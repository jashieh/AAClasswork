export default class MarketManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    
    updateMarkers(benches) {
        console.log("time to update");
        const benchesObj = {};
        benches.forEach(bench => benchesObj[bench.id] = bench);
        
        let unmarkedBenches = benches.filter(bench => !this.markers[bench.id]);
        unmarkedBenches.forEach(bench => this.createMarkerFromBench(bench));
        
        Object.keys(this.markers)
        .filter(benchId => !benchesObj[benchId])
        .forEach((benchId) => this.removeMarker(this.markers[benchId]))
        
    }
    
    createMarkerFromBench(bench) {
        const position = new google.maps.LatLng(bench.lat, bench.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            benchId: bench.id
        });
        
        marker.addListener('click', () => this.handleClick(bench));
        this.markers[marker.benchId] = marker;
    }
}