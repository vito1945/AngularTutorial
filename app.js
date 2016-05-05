(function(){

    var app = angular.module('store',[]);
    
    app.controller('StoreController', function(){
        this.products = gems;        
    });
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
        
        
    });
    
    
    var gems = [
    
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Very valuable gem',
        canPurchase: true,
        soldOut: false,
        images:[
            {
                full: 'img\\Dodecahedron.jpg'
            }
            
        ]
        
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Five side Gems',
        canPurchase: true        
    }
    
   ];
    
})(); 