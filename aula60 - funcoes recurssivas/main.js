function recurssiva(max) {
    if(max >= 10) return;
    max++;
    console.log(max);
    recurssiva(max);
}

recurssiva(0);