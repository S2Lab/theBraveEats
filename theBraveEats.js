"use strict";

var BE={}; // the Brave Eats

(function(){

    console.log("be loading");


    BE.infos={};

    BE.infos.name="the Brave Eats";

    BE.infos.version="0.3.0";



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
    BE.bd.Items._default_nullFunction=function()
    {
    	;
    }
    BE.bd.Itmes._default_itemEvent=function(entityIn,entityTargetIn,locTargetIn,idIn,amountIn,dataIn)
    {
    	;
    }
    BE.bd.Items._default_compareDataTag=function(dataIn,tagIn,valueIn)
    {
    	return dataIn[tagIn]==valueIn;
    }
    BE.bd.Items._default_getData=function(dataIn,tagIn)
    {
    	return dataIn[tagIn];
    }
    BE.bd.Items._default_setData=function(dataIn,tagIn,valueIn)
    {
    	dataIn[tagIn]=valueIn;
    	return dataIn;
    }
    BE.bd.Items._default_getDefaultData=function()
    {
    	return {};
    }
    BE.bd.Items._cItem=function() // class Item

    {

        this.item=this;

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


        this.type="SYS";

        this.getData=BE.bd.Items._default_getData;

        this.setData=BE.bd.Items._default_setData;

        this.compareDataTag=BE.bd.Items._default_compareDataTag;

        this.getDefaultData=BE.bd.Items._default_getDefaultData;


        this.renderPath="cItem";

        return this;

    }

    BE.bd.Items._cItemStack=function(idIn,amountIn,dataIn)
    {

        this.itemStack=this;

        this.id=idIn;

        this.amount=amountIn;


        if(dataIn==null || dataIn==undefined)

            this.data=return BE.bd.Items.getItem(itemStack.id).getDefaultData();

        else

            this.data=dataIn;

        this.getData=function(tagIn)

        {

            return BE.bd.Items.getItem(itemStack.id).getData(itemStack.data,tagIn);

        }

        this.setData=function(tagIn,valueIn)

        {

            itemStack.data=BE.bd.Items.getItem(itemStack.id).setData(itemStack.data,tagIn,valueIn);

        }

        this.compareDataTag=function(tagIn,valueIn)

        {

            return BE.bd.Items.getItem(itemStack.id).compareDataTag(tagIn,valueIn);

        }

       

    }

    BE.bd.Items._cInv=function()

    {

        this.inv=this;

        this.stacks=[];

        this.amountItem=function(idIn)

        {

            for(let i=0;i<stacks.length;i++)

            {

                if(stacks[i].id==idIn)

                    return stacks[i].amount;

            }

            return 0;

        }

        this.hasItem=function(idIn)

        {

            return this.amountItem(idIn)>0;

        }

// addItem removeItem setData getData

        this.addItem=function(idIn,amountIn,dataIn)

        {

            if(this.hasItem(idIn))

                for(let i=0;i<this.stacks.length;i++)

                {

                    if(this.stacks[i].id==idIn && this.stacks[i].data==dataIn)

                }

            else

            {}

        }

        this.removeItem=function(idIn,amountIn,dataIn)

        {

            ;

        }

        this.removeItemLoc=function(locIn)

        {

            if(locIn<0 || locIn>=this.stacks.length)

                return;

            else

                delete this.stacks[locIn];

        }

        this.getDataLoc=function(locIn,tagIn)

        {

            if(locIn<0 || locIn>=this.stacks.length)

                return;

            else

                this.stacks[locIn].getData(tagIn);

        }

        this.setDataLoc=function(locIn,tagIn,valueIn)

        {

            if(locIn<0 || locIn>=this.stacks.length)

                return;

            else

                this.stacks[locIn].setData(tagIn,valueIn);

        }

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

