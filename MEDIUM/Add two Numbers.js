 let addTwoNumbers=function (l1,l2){
      
       let dummyHead= new ListNode(0) , node=dummyHead;
       let carry= 0,a,b,c,value;
       
       while (l1 !==null || l2 !==null){
       a= (l1===null) ? 0 :l1.val;
       b= (l2===null) ? 0 :l2.val;
       c=a+b+carry;
       val=c%10;
       carry=Math.floor(c/10);
       node.next=new Listnode(val);
       node=node.next;
       if(l1 !==null) l1=l1.next;
       if(l2!==null) l2=l2.next;
       }
       if (carry !==0){
         node.next= new ListNode (carry);
       }
       return dummyHead.next;
}

        

