#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>

std::string threat_level() {
    int r = rand() % 100;
    if(r <= 40) return "منخفض";
    else if(r <= 70) return "متوسط";
    else return "مرتفع";
}

int main() {
    srand(time(0));
    for(int i=0;i<5;i++){
        std::cout << "تهديد: " << threat_level() << std::endl;
    }
    return 0;
}
