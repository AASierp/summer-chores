

function mowYard(name, callback){
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
}, 2000);
}

function weedEat(name, callback){
    if(Math.random() < .05){
        console.log(`${name} fell asleep after mowing the yard.`);
    }
    else{
        setTimeout(() => {
            console.log(`${name} finished using the weedeater`);
            callback();
        }, 1500);
    }
}

function trimHedges(name, callback){
    if(Math.random() < .10){
        console.log(`${name} fell asleep after weed eating the yard.`);
    }
    else{
        setTimeout(() => {
            console.log(`${name} finished trimming the hedges.`);
            callback();
    }, 1000);
    }
}

function collectWood(name, callback){
    if(Math.random() < .15){
        console.log(`${name} fell asleep after trimming the hedges`)
    }
    else{
        setTimeout(() => {
            console.log(`${name} finished collecting the wood`);
            callback();
        }, 2500);
    }
}

function waterGarden(name, callback){
    if(Math.random() < .20){
        console.log(`${name} fell asleep after collecting wood`)
    }
    else{
        setTimeout(() => {
            console.log(`${name} finished watering garden`);
            callback();
        }, 500);
    }
}

function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}


doSummerChores("Aaron");


