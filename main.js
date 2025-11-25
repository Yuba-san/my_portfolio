function button(num)
{
    for(let i = 0; i < 4; i++)   
    {
        if(i == num)
        {
            document.getElementById(`main_${i}`).hidden = false;
        }
        else
        {
            document.getElementById(`main_${i}`).hidden = true;
        }
    }
}