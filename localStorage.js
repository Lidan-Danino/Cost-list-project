/*Developers-Details:*/
/*Lidan Danino 207599473
 *Niv Netanel  208540302
 *Carmel Bar   207895103*/

class StorageActions
 {
//Store in ls
    async storeCostInLocalStorage(mission, sum, category) {
         let items;
         const currentDate = new Date();
         let month = months[currentDate.getMonth()];
         let year = currentDate.getFullYear();
         if (localStorage.getItem('items') == null) {
             items = [];
         } else {
             items = JSON.parse(localStorage.getItem('items'));
         }
         items.push({mission, sum, category, month, year});
         localStorage.setItem('items', JSON.stringify(items));
     }

//Get from ls
    async getCostsFromLs() {
         let items = [];
         if (localStorage.getItem('items') == null) {
             items = [];
         } else {
             items = JSON.parse(localStorage.getItem('items'));
         }
         localStorage.setItem('items', JSON.stringify(items));
         return items;
     }

//Clear ls
     async clearCosts() {
         localStorage.clear();
     }
 }
