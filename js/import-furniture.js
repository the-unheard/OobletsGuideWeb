const furnitureData = [
    {"type":"armchairs","name":"fancy red chair","location":"Manatwee","cost":"170"},
    {"type":"armchairs","name":"green comfy midcentury armchair","location":"Manatwee","cost":"90"},
    {"type":"armchairs","name":"green country chair","location":"Manatwee","cost":"50"},
    {"type":"armchairs","name":"grey scoop armchair","location":"Manatwee","cost":"100"},
    {"type":"armchairs","name":"indoor outdoor chair","location":"Manatwee","cost":"50"},
    {"type":"armchairs","name":"jetsetter armchair","location":"Manatwee","cost":"70"},
    {"type":"armchairs","name":"old country armchair brown","location":"Manatwee","cost":"75"},
    {"type":"armchairs","name":"old country armchair white","location":"Manatwee","cost":"75"},
    {"type":"armchairs","name":"purple cocktail armchair","location":"Manatwee","cost":"70"},
    {"type":"armchairs","name":"red scoop armchair","location":"Manatwee","cost":"150"},
    {"type":"armchairs","name":"teal midcentury armchair","location":"Manatwee","cost":"80"},
    {"type":"armchairs","name":"victorian armchair","location":"Manatwee","cost":"130"},
    {"type":"beds","name":"angular bed","location":"Manatwee","cost":"200"},
    {"type":"beds","name":"bed of optimism","location":"Manatwee","cost":"200"},
    {"type":"beds","name":"camping cot","location":"Oobazon","cost":"60"},
    {"type":"beds","name":"cursed canopy bed","location":"Vampire Bento","cost":"400"},
    {"type":"beds","name":"dark angular bed","location":"Manatwee","cost":"200"},
    {"type":"beds","name":"haunted bed","location":"Vampire Bento","cost":"400"},
    {"type":"beds","name":"iron bed","location":"Manatwee","cost":"250"},
    {"type":"beds","name":"iron bunkbed","location":"Manatwee","cost":"150"},
    {"type":"beds","name":"messy bed","location":"Manatwee","cost":"150"},
    {"type":"beds","name":"sun bed","location":"Manatwee","cost":"300"},
    {"type":"carpets","name":"antique rug","location":"Vampire Bento","cost":"200"},
    {"type":"carpets","name":"antique square rug","location":"Vampire Bento","cost":"200"},
    {"type":"chairs","name":"black iron chair","location":"Manatwee","cost":"50"},
    {"type":"chairs","name":"cocktail chair","location":"Manatwee","cost":"50"},
    {"type":"chairs","name":"coffin lid chair","location":"Vampire Bento","cost":"200"},
    {"type":"chairs","name":"country dining chair","location":"Manatwee","cost":"50"},
    {"type":"chairs","name":"country rocking chair","location":"Manatwee","cost":"70"},
    {"type":"chairs","name":"cream iron chair","location":"Manatwee","cost":"50"},
    {"type":"chairs","name":"family restaurant chair","location":"Manatwee","cost":"50"},
    {"type":"chairs","name":"fancy pink chair","location":"Manatwee","cost":"90"},
    {"type":"chairs","name":"future stool","location":"Manatwee","cost":"30"},
    {"type":"chairs","name":"heart chair","location":"Manatwee","cost":"60"},
    {"type":"chairs","name":"marshmallow chair","location":"Manatwee","cost":"60"},
    {"type":"chairs","name":"not very comfy chair","location":"Vampire Bento","cost":"100"},
    {"type":"chairs","name":"passable chair","location":"Manatwee","cost":"40"},
    {"type":"chairs","name":"red wooden chair","location":"Manatwee","cost":"50"},
    {"type":"chairs","name":"retro green chair","location":"Manatwee","cost":"60"},
    {"type":"chairs","name":"retro pink chair","location":"Manatwee","cost":"60"},
    {"type":"chairs","name":"tiki barstool","location":"Manatwee","cost":"30"},
    {"type":"chairs","name":"useful stool","location":"Manatwee","cost":"50"},
    {"type":"chests","name":"common treasure chest","location":"Manatwee","cost":"100"},
    {"type":"chests","name":"common treasure chest black","location":"Manatwee","cost":"100"},
    {"type":"chests","name":"common treasure chest brown","location":"Manatwee","cost":"100"},
    {"type":"chests","name":"less common chest black","location":"Manatwee","cost":"150"},
    {"type":"chests","name":"less common chest gold","location":"Manatwee","cost":"150"},
    {"type":"chests","name":"less common chest light","location":"Manatwee","cost":"150"},
    {"type":"chests","name":"less common chest red","location":"Manatwee","cost":"150"},
    {"type":"couches","name":"cozy couch","location":"Manatwee","cost":"210"},
    {"type":"couches","name":"doily loveseat","location":"Manatwee","cost":"190"},
    {"type":"couches","name":"eye couch","location":"Vampire Bento","cost":"300"},
    {"type":"couches","name":"fancy red couch","location":"Manatwee","cost":"240"},
    {"type":"couches","name":"gilded loveseat","location":"Manatwee","cost":"200"},
    {"type":"couches","name":"green comfy midcentury couch","location":"Manatwee","cost":"150"},
    {"type":"couches","name":"green country couch","location":"Manatwee","cost":"120"},
    {"type":"couches","name":"grey scoop couch","location":"Manatwee","cost":"150"},
    {"type":"couches","name":"indoor outdoor couch","location":"Manatwee","cost":"100"},
    {"type":"couches","name":"marshmallow couch","location":"Manatwee","cost":"190"},
    {"type":"couches","name":"red scoop couch","location":"Manatwee","cost":"200"},
    {"type":"couches","name":"teal midcentury couch","location":"Manatwee","cost":"140"},
    {"type":"couches","name":"yellow scoop couch","location":"Manatwee","cost":"150"},
    {"type":"drawers","name":"cream cabinet","location":"Manatwee","cost":"50"},
    {"type":"drawers","name":"dresser with planties","location":"Manatwee","cost":"140"},
    {"type":"drawers","name":"green caster cabinet","location":"Manatwee","cost":"50"},
    {"type":"drawers","name":"hero dresser","location":"Manatwee","cost":"120"},
    {"type":"drawers","name":"little square dresser","location":"Manatwee","cost":"60"},
    {"type":"drawers","name":"midcentury wooden dresser","location":"Manatwee","cost":"150"},
    {"type":"drawers","name":"pale blue dresser","location":"Manatwee","cost":"200"},
    {"type":"drawers","name":"pink dresser","location":"Manatwee","cost":"90"},
    {"type":"drawers","name":"simple wooden dresser","location":"Manatwee","cost":"120"},
    {"type":"drawers","name":"small step dresser","location":"Manatwee","cost":"90"},
    {"type":"drawers","name":"yellow caster cabinet","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"charred floor","location":"Vampire Bento","cost":"200"},
    {"type":"floorings","name":"classic tiles","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"darker wood","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"dignified tiles","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"dyed wood (dark mauve)","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"dyed wood (rose)","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"dyed wood (moss)","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"dyed wood (mustard)","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"dyed wood (ice)","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"rusty brown geometric carpet","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"turquoise geometric carpet","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"light wood","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"sensible carpet - cream","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"sensible carpet - earth","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"sensible carpet - midnight","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"splattered floor","location":"Manatwee","cost":"50"},
    {"type":"floorings","name":"tiled floor","location":"Manatwee","cost":"50"},
    {"type":"kitchen","name":"irn stuv","location":"Manatwee","cost":"1500"},
    {"type":"kitchen","name":"kettle and cup","location":"Cuddlecups","cost":"1500"},
    {"type":"kitchen","name":"kitchen cabinet","location":"Manatwee","cost":"100"},
    {"type":"kitchen","name":"kitchen cabinet - corner","location":"Manatwee","cost":"100"},
    {"type":"kitchen","name":"lectroglow oven","location":"Manatwee","cost":"2500"},
    {"type":"kitchen","name":"old hot plate","location":"Oobazon","cost":"50"},
    {"type":"lightings","name":"basic floor lamp","location":"Manatwee","cost":"80"},
    {"type":"lightings","name":"branching floor lamp","location":"Manatwee","cost":"80"},
    {"type":"lightings","name":"candlelight mirror","location":"Vampire Bento","cost":"50"},
    {"type":"lightings","name":"color splash floor lamp","location":"Manatwee","cost":"80"},
    {"type":"lightings","name":"cutesy lamp","location":"Manatwee","cost":"80"},
    {"type":"lightings","name":"odds and angles floor lamp","location":"Manatwee","cost":"70"},
    {"type":"lightings","name":"planetary floor lamp","location":"Manatwee","cost":"40"},
    {"type":"lightings","name":"potter's wheel floor lamp","location":"Manatwee","cost":"80"},
    {"type":"lightings","name":"red shade floor lamp","location":"Manatwee","cost":"40"},
    {"type":"lightings","name":"spookyish floor lamp","location":"Manatwee","cost":"150"},
    {"type":"lightings","name":"wall candle","location":"Vampire Bento","cost":"50"},
    {"type":"others","name":"accent reeds","location":"Manatwee","cost":"20"},
    {"type":"others","name":"beanbag","location":"Manatwee","cost":"50"},
    {"type":"others","name":"cauldron","location":"Vampire Bento","cost":"250"},
    {"type":"others","name":"dead plant 1","location":"Vampire Bento","cost":"150"},
    {"type":"others","name":"dead plant 2","location":"Vampire Bento","cost":"150"},
    {"type":"others","name":"elevation station table","location":"Manatwee","cost":"70"},
    {"type":"others","name":"fireplace of fright","location":"Oobazon","cost":"200"},
    {"type":"others","name":"gilded tea cart","location":"Manatwee","cost":"150"},
    {"type":"others","name":"haunted clock","location":"Vampire Bento","cost":"250"},
    {"type":"others","name":"old luggage","location":"Oobazon","cost":"90"},
    {"type":"others","name":"telescope","location":"Manatwee","cost":"150"},
    {"type":"others","name":"tiki bar","location":"Manatwee","cost":"50"},
    {"type":"others","name":"tiki palm tree","location":"Manatwee","cost":"60"},
    {"type":"others","name":"tray of curated cruft","location":"Manatwee","cost":"20"},
    {"type":"paints","name":"bright stripes paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"cream paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"cute stucco paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"dust bowl paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"green paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"pink paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"sharp stripes paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"soft stripes paint","location":"Manatwee","cost":"50"},
    {"type":"paints","name":"spooky paint","location":"Vampire Bento","cost":"500"},
    {"type":"paints","name":"teal paint","location":"Manatwee","cost":"50"},
    {"type":"shelves","name":"cozy case","location":"Manatwee","cost":"170"},
    {"type":"shelves","name":"dark smoothed bookshelf","location":"Manatwee","cost":"80"},
    {"type":"shelves","name":"gilded shelves","location":"Manatwee","cost":"90"},
    {"type":"shelves","name":"plain bookshelf","location":"Manatwee","cost":"75"},
    {"type":"shelves","name":"smoothed bookshelf white","location":"Manatwee","cost":"80"},
    {"type":"shelves","name":"smoothed cabinet","location":"Manatwee","cost":"75"},
    {"type":"shelves","name":"very old bookcase","location":"Vampire Bento","cost":"200"},
    {"type":"tables","name":"campy coffee table","location":"Manatwee","cost":"80"},
    {"type":"tables","name":"country desk","location":"Manatwee","cost":"90"},
    {"type":"tables","name":"cursed desk","location":"Vampire Bento","cost":"250"},
    {"type":"tables","name":"foldable table","location":"Manatwee","cost":"40"},
    {"type":"tables","name":"heart coffee table","location":"Manatwee","cost":"100"},
    {"type":"tables","name":"iron table","location":"Manatwee","cost":"80"},
    {"type":"tables","name":"marshmallow coffee table","location":"Manatwee","cost":"75"},
    {"type":"tables","name":"midcentury maybe coffee table","location":"Manatwee","cost":"80"},
    {"type":"tables","name":"midcentury maybe coffee table brown","location":"Manatwee","cost":"80"},
    {"type":"tables","name":"midcentury maybe table","location":"Manatwee","cost":"50"},
    {"type":"tables","name":"old country table","location":"Manatwee","cost":"70"},
    {"type":"tables","name":"plain coffee table","location":"Manatwee","cost":"70"},
    {"type":"tables","name":"retro long display stand","location":"Manatwee","cost":"60"},
    {"type":"tables","name":"retro small display stand","location":"Manatwee","cost":"40"},
    {"type":"tables","name":"round coffee table","location":"Manatwee","cost":"60"},
    {"type":"tables","name":"slate desk","location":"Manatwee","cost":"90"},
    {"type":"tables","name":"small round sidetable","location":"Manatwee","cost":"40"},
    {"type":"tables","name":"tiki table","location":"Manatwee","cost":"65"},
    {"type":"tables","name":"two plop desk","location":"Manatwee","cost":"80"},
    {"type":"tables","name":"wobbly table","location":"Manatwee","cost":"30"},
    {"type":"trinkets","name":"beep boop","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"book stack 1","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"book stack 2","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"cat head plant pot","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"dangletoy","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"fizzy cup","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"keeper of warm","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"little plant","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"lookie lens","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"pen pot","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"planty","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potion 1","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potion 2","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potted plant 1","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potted plant 2","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potted plant 3","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potted plant 4","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potted plant 5","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potted plant 6","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"potted plant 7","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"spinny director","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"stinky sock","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"tabuluter","location":"Lernery","cost":"100"},
    {"type":"trinkets","name":"weird box","location":"Lernery","cost":"100"},
    {"type":"walldecors","name":"halloween bunting","location":"Vampire Bento","cost":"50"},
    {"type":"walldecors","name":"witch's bookshelf","location":"Vampire Bento","cost":"100"},
    {"type":"walldecors","name":"witch's wall shelf","location":"Vampire Bento","cost":"100"},
    {"type":"wallpapers","name":"antique spookiness wallpaper","location":"Vampire Bento","cost":"200"},
    {"type":"wallpapers","name":"auntie's wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"bakery wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"basic tulips - meadow","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"basic tulips - plum","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"basic tulips - taupe","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"basket lines wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"bizzy wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"bones wallpaper","location":"Arah","cost":"0"},
    {"type":"wallpapers","name":"botanical lines - green","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"botanical lines - plum","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"botanical lines - turqoise","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"bowling alley wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"brush strokes wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"creepin' vines wallpaper","location":"Vampire Bento","cost":"200"},
    {"type":"wallpapers","name":"memfizz wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"dated wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"faded stripes wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"fan leaves wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"flannel wallpaper","location":"Oobazon","cost":"50"},
    {"type":"wallpapers","name":"geometric squiggles wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"greenery wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"jee-oh wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"lil stars wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"lovely wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"magical stars wallpaper","location":"Vampire Bento","cost":"200"},
    {"type":"wallpapers","name":"novelty witchy wallpaper","location":"Vampire Bento","cost":"200"},
    {"type":"wallpapers","name":"polka dot wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"retro fronds wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"soft little dots wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"soft n' sepia wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"spots and bits wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"tropical splots wallpaper","location":"Manatwee","cost":"50"},
    {"type":"tables","name":"broken leg table","location":"Manatwee","cost":"40"},
    {"type":"carpets","name":"colorful rug","location":"Manatwee","cost":"30"},
    {"type":"carpets","name":"confetti rug","location":"Manatwee","cost":"30"},
    {"type":"trinkets","name":"eoieens candle","location":"Eoieen","cost":"80"},
    {"type":"chairs","name":"family restaurant chair dark","location":"Manatwee","cost":"50"},
    {"type":"carpets","name":"regular rug","location":"Manatwee","cost":"30"},
    {"type":"tables","name":"retro big display stand","location":"Manatwee","cost":"80"},
    {"type":"kitchen","name":"retro fridge","location":"Manatwee","cost":"350"},
    {"type":"tables","name":"small display stand","location":"Manatwee","cost":"120"},
    {"type":"tables","name":"square display stand","location":"Manatwee","cost":"180"},
    {"type":"chairs","name":"stool you see everywhere","location":"Manatwee","cost":"40"},
    {"type":"walldecors","name":"twinkle lads","location":"Winter 2021","cost":"0"},
    {"type":"wallpapers","name":"loud flowers wallpaper","location":"Manatwee","cost":"50"},
    {"type":"wallpapers","name":"cute geometric wallpaper","location":"Manatwee","cost":"50"},
    {"type":"armchairs","name":"cursed armchair","location":"Vampire Bento","cost":"150"},
    {"type":"tables","name":"coffin table","location":"Vampire Bento","cost":"80"},
    {"type":"tables","name":"basic small display case (brown)","location":"Manatwee","cost":"75"},
    {"type":"tables","name":"basic small display case (dark)","location":"Manatwee","cost":"75"},
    {"type":"tables","name":"basic small display case (ice)","location":"Manatwee","cost":"75"},
    {"type":"wallpapers","name":"antique spookiness wallpaper 2","location":"Halloween","cost":"10"},
    {"type":"tables","name":"basic small display case (rose)","location":"Manatwee","cost":"75"},
    {"type":"tables","name":"basic small display case (rust)","location":"Manatwee","cost":"75"},
    {"type":"wallpapers","name":"boats wallpaper","location":"Port Forward","cost":"750"},
    {"type":"wallpapers","name":"snowflake wallpaper","location":"Winter 2022","cost":"0"},
    {"type":"walldecors","name":"busy shelf","location":"Oobazon","cost":"80"},
    {"type":"walldecors","name":"country wall shelf","location":"Oobazon","cost":"50"},
    {"type":"walldecors","name":"portrait of eerie ehrid","location":"Vampire Bento","cost":"100"},
    {"type":"walldecors","name":"portrait of glarence","location":"Vampire Bento","cost":"100"},
    {"type":"walldecors","name":"portrait of howling howurb","location":"Vampire Bento","cost":"100"},
    {"type":"walldecors","name":"portrait of pezboot","location":"Vampire Bento","cost":"100"},
    {"type":"walldecors","name":"portrait of spooky steev","location":"Vampire Bento","cost":"100"},
    {"type":"lightings","name":"candelabra","location":"Vampire Bento","cost":"20"},
    {"type":"lightings","name":"crying candles","location":"Oobazon","cost":"0"},
    {"type":"lightings","name":"hand candle","location":"Oobazon","cost":"0"},
    {"type":"lightings","name":"lightly-haunted lamp","location":"Vampire Bento","cost":"150"},
    {"type":"tables","name":"frayed coffee table","location":"Oobazon","cost":"40"},
    {"type":"tables","name":"lightly-cursed table","location":"Oobazon","cost":"100"},
    {"type":"tables","name":"creepin sidetable","location":"Vampire Bento","cost":"40"},
    {"type":"armchairs","name":"old armchair","location":"Oobazon","cost":"80"},
    {"type":"others","name":"sleepy roll","location":"Oobazon","cost":"50"},
    {"type":"others","name":"folding standing mirror","location":"Oobazon","cost":"40"},
    {"type":"others","name":"flying materials","location":"Vampire Bento","cost":"200"},
    {"type":"walldecors","name":"lovely bunting","location":"Manatwee","cost":"15"},
    {"type":"drawers","name":"cursed side cabinet","location":"Oobazon","cost":"50"},
    {"type":"wallpapers","name":"spooky bone wallpaper","location":"Halloween","cost":"25"},
    {"type":"wallpapers","name":"spooky oob wallpaper","location":"Halloween","cost":"10"},
    {"type":"wallpapers","name":"spooky oob wallpaper 2","location":"Halloween","cost":"200"},
    {"type":"shelves","name":"the collector's case (chalky blue)","location":"Spring Event","cost":"0"},
    {"type":"shelves","name":"the collector's case (dark blue)","location":"Spring Event","cost":"0"},
    {"type":"shelves","name":"the collector's case (dark wood)","location":"Spring Event","cost":"0"},
    {"type":"shelves","name":"the collector's case (chalk)","location":"Spring Event","cost":"0"},
    {"type":"shelves","name":"the collector's case (lilac)","location":"Spring Event","cost":"0"},
    {"type":"drawers","name":"split-level sideboard (chalky blue)","location":"Spring Event","cost":"0"},
    {"type":"drawers","name":"split-level sideboard (dark blue)","location":"Spring Event","cost":"0"},
    {"type":"drawers","name":"split-level sideboard (dark wood)","location":"Spring Event","cost":"0"},
    {"type":"drawers","name":"split-level sideboard (chalk)","location":"Spring Event","cost":"0"},
    {"type":"drawers","name":"split-level sideboard (lilac)","location":"Spring Event","cost":"0"},
];

furnitureData.sort((a, b) => a.name.localeCompare(b.name));

toTitleCase = (str) => {return str.replace(/(?:^|\s)\w/g, (match) => { return match.toUpperCase()})}

furnitureData.forEach(furniture =>{
    $('.furnitures-' + furniture.type).append(
        $(document.createElement('div'))
            .addClass('furniture-item d-inline-block m-3 p-3 align-top og-bg-gray-200 position-relative')
            .append(
                $(document.createElement('span'))
                    .addClass('furniture-cost position-absolute og-bg-wisteria text-light')
                    .text(furniture.cost)
            )
            .append(
                $(document.createElement('span'))
                    .addClass('furniture-location position-absolute og-bg-gray-400')
                    .text(furniture.location)
            )
            .append(
                $(document.createElement('div'))
                    .addClass('furniture-img mx-auto')
                    .css('background-image', 'url("images/furnitures/' + furniture.type + '/' + furniture.name.replace(/ /g, '_').replace(/'/g, '') + '.png")')
            )
            .append(
                $(document.createElement('p'))
                    .addClass('furniture-name og-ellipsis')
                    .attr('title', toTitleCase(furniture.name))
                    .text(furniture.name)
            )
    )
})