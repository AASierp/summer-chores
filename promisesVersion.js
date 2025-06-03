

function mowYard(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        resolve();
        }, 2000);
    });
    
}

function weedEat(name){
    return new Promise((resolve, reject) => {
            if(Math.random() < .05){
            reject(console.log(`${name} fell asleep after mowing the yard.`));
        }
    else{
            setTimeout(() => {
            console.log(`${name} finished using the weedeater`);
            resolve();
            }, 1500);
        }
    });
    
}

function trimHedges(name){
    return new Promise((resolve, reject) => {
        if(Math.random() < .10){
        reject(console.log(`${name} fell asleep after weed eating the yard.`));
    }
    else{
        setTimeout(() => {
            console.log(`${name} finished trimming the hedges.`);
            resolve();
            }, 1000);
        }
    });
}

function collectWood(name){
    return new Promise((resolve, reject) => {
        if(Math.random() < .15){
        reject(console.log(`${name} fell asleep after trimming the hedges`));
    }
    else{
        setTimeout(() => {
            console.log(`${name} finished collecting the wood`);
            resolve();
            }, 2500);
        }
    });
}

function waterGarden(name){
    return new Promise((resolve, reject) => {
        if(Math.random() < .20){
        reject(console.log(`${name} fell asleep after collecting wood`));
    }
    else{
        setTimeout(() => {
            console.log(`${name} finished watering garden`);
            resolve();
            }, 500);
        }
    });
    
}

function doSummerChores(name) {
  mowYard(name)
    .then(() => weedEat(name))
    .then(() => trimHedges(name))
    .then(() => collectWood(name))
    .then(() => waterGarden(name))
    .then(() => console.log(`${name} completed all their chores`))
    .catch((error) => {
    console.error(error);
    });
}


doSummerChores("Aaron");


