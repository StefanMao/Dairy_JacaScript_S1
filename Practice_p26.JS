// You don't Know JS Practice

const TAX =0.05;
const bank_Deposit=500;
const cell_phone_price = 400;
const discount_SPENDING_THRESHOLD=300;
const discount=0.2;

var Amount=0;

function cal_Amount(Amount)
{
		Amount=(cell_phone_price+cell_phone_price*TAX);
		ifover_THRESHOLD(Amount);	
		return Amount;
}

function ifover_THRESHOLD(Amount)
{
	if (Amount>=discount_SPENDING_THRESHOLD) {
		Amount=Amount*(1-discount);
		}
}

Amount=cal_Amount(Amount);

console.log("消費金額為:"+Amount);

if(Amount>bank_Deposit)
{
	console.log("you can not afford it !");
}
else
{

	console.log("Sucessful !");
}