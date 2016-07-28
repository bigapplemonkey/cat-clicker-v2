var initialCats = [{
    name: 'Kitty 1',
    image: 'http://placekitten.com/200/300',
    clickCount: 0,
    nickNames: ['Bungle1', 'Zippy1', 'Hippo1']
}, {
    name: 'Kitty 2',
    image: 'http://placekitten.com/300/300',
    clickCount: 0,
    nickNames: ['Bungle2', 'Zippy2', 'Hippo2']
}, {
    name: 'Kitty 3',
    image: 'http://placekitten.com/400/300',
    clickCount: 0,
    nickNames: ['Bungle3', 'Zippy3', 'Hippo3']
}, {
    name: 'Kitty 4',
    image: 'http://placekitten.com/500/300',
    clickCount: 0,
    nickNames: ['Bungle4', 'Zippy4', 'Hippo4']
}, {
    name: 'Kitty 5',
    image: 'http://placekitten.com/600/300',
    clickCount: 0,
    nickNames: ['Bungle5', 'Zippy5', 'Hippo5']
}];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.image);
    this.nickNames = ko.observableArray(data.nickNames);
    this.level = ko.computed(function() {
        var level = 'Kid';
        if (this.clickCount() > 15) level = 'Old';
        else if (this.clickCount() > 10) level = 'Adult';
        else if (this.clickCount() > 5) level = 'Teen';
        return level;
    }, this);
};

var ViewModel = function() {
    var self = this;
    this.cats = ko.observableArray([]);

    initialCats.forEach(
        function(cat) {
            self.cats.push(new Cat(cat));
        }
    );
    this.currentCat = ko.observable(this.cats()[0]);

    this.incrementClickCount = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }

    this.setCat = function(elem) {
        self.currentCat(elem);
    };
};

ko.applyBindings(new ViewModel());
