"use strict";
var BE={}; // the Brave Eats
(function(){
    console.log("be loading");

    BE.infos={};
    BE.infos.name="the Brave Eats";
    BE.infos.version="0.1.0";


    BE.bd={}; // basic datas
    BE.rd={}; // runtime datas
    BE.funs={};

    // init Item
    BE.bd.Items={};
    BE.bd.Items.items=[];
    BE.bd.Items.regItem=function(itemIn)
    {
        BE.bd.Items.items.push(itemIn);
    }
    BE.bd.Items.getItem=function(idIn)
    {
        for(let i=0;i<BE.bd.Items.items.length;i++)
        {
            if(BE.bd.Items.items[i].id==idIn)
                return BE.bd.Items.items[i];
        }
        return BE.bd.Items.getItem("error");
    }
    BE.bd.Items._cItem=function() // class Item
    {
        this.id="cItem";
        this.name="cItemName";
        this.rarity=-1;
        this.tip="cItemTip";
        this.onGet=function(){;};
        this.onCraft=function(){;};
        this.onDrop=function(){;};
        this.canDrop=true;
        this.onUse=function(){;};
        this.onUseFight=function(){;};
        this.canUse=false;
        this.canUseFight=false;

        this.renderPath="cItem";
        return this;
    }
    BE.bd.Items._init=function()
    {
        // add all items here
        let ErrorItem=new BE.bd.Items._cItem();
        ErrorItem.id="error";
        ErrorItem.name="ERROR Item";
        ErrorItem.tip="You should not get this item!";

        BE.bd.Items.regItem(ErrorItem);
    }

    BE._init=function()
    {
        BE.bd.Items._init();
    }
    BE._init();
})();
