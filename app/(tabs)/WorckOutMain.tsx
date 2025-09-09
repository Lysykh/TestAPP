
import React from 'react';
import { Image, Text, View } from 'react-native';
import CalcRun from './calculator/calc_run';
// - Импортируем элеметы выбора

interface WorckOutMainProps {
  workoutLevel: number;
  setWorkoutLevel: React.Dispatch<React.SetStateAction<number>>;
}


const WorckOutMain = ({ workoutLevel, setWorkoutLevel }: WorckOutMainProps) => {



  return (
    <View 
    style={{ 
        borderWidth: 0, 
        backgroundColor: '#FFFFFF', // цвет фона
        borderColor: 'blue', 
        borderRadius: 15,
        padding: 0,
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
       
        
                    }}
    >
      <Text>РАЗМИНКА</Text>
  
            <View><Text>{workoutLevel}</Text></View> 
       <View style={{ 
        borderWidth: 0, 
        height: 60,
        padding: 8,
        borderColor: 'red', 
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 0, borderColor: 'blue', backgroundColor: '#BFBFBF', height:'100%', padding: 4, borderRadius: 5 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 0, borderColor: 'blue', height:'100%'}}>
                <View style={{height:'50%', justifyContent: 'center' }}>
                <Image 
    source={require('../../assets/images/time_b.png')} 
    style={{ borderWidth: 0, borderColor: 'red', width: 15, height: 15}}
                />
                </View>
                <View style={{height:'50%', justifyContent: 'center' }}>
               
                <Image 
    source={require('../../assets/images/time_b.png')} 
    style={{ borderWidth: 0, borderColor: 'black', width: 15, height: 15}}
                />
                </View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 8 : 15</Text></View>
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 60 : 15</Text></View>
            </View>
             
     </View> 

<Text>ОСНОВНОЕ ЗАДАНИЕ</Text>
  {/* НАЧАЛО ГРУППЫ ТЕГОВ ПОДХОДЫ */}

<View style={{ 
        borderWidth: 0, 
        height: 30,
        borderColor: 'red', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 0, borderColor: 'blue', backgroundColor: 'white', height:'100%', padding: 4 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 0, borderColor: 'white', height:'100%'}}>
                <View style={{height:'100%', justifyContent: 'center' }}>
                <Image 
    source={require('../../assets/images/approaches_b.png')} 
    style={{ borderWidth: 0, borderColor: 'red', width: 20, height: 20}}
                />
                </View>

            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'100%', justifyContent: 'center' }}><Text> 2 повторений</Text></View>

            </View>
             
     </View> 

            {/* КОНЕЦ ГРУППА ТЕГОВ - ПОДХОДЫ */}
{/* Группа тегов повторение */}


<View style={{ 
        borderWidth: 0, 
        height: 30,
        borderColor: 'red', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 0, borderColor: 'blue', backgroundColor: 'white', height:'100%', padding: 4 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 0, borderColor: 'red', height:'100%'}}>
                <View style={{height:'100%', justifyContent: 'center', marginLeft: 10, }}>
                <Image 
    source={require('../../assets/images/repeats_b.png')} 
    style={{ borderWidth: 0, borderColor: 'red', width: 20, height: 20}}
                />
                </View>

            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'100%', justifyContent: 'center' }}><Text> 2 повторений</Text></View>

            </View>
             
     </View> 

{/* КОНЕЦ ГРУППЫ ТЕГОВ ПОВТОРЕНИЕ */}

<View style={{ 
        borderWidth: 0, 
        height: 60,
        borderColor: 'red', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 0, borderColor: 'blue', backgroundColor: '#D89738', height:'100%', padding: 4, marginLeft: 40, borderRadius: 5 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 0, borderColor: 'blue', height:'100%'}}>
                <View style={{height:'50%', justifyContent: 'center' }}>
                <Image 
    source={require('../../assets/images/time_b.png')} 
    style={{ borderWidth: 0, borderColor: 'red', width: 15, height: 15}}
                />
                </View>
                <View style={{height:'50%', justifyContent: 'center' }}>
               
                <Image 
    source={require('../../assets/images/tempo_b.png')} 
    style={{ borderWidth: 0, borderColor: 'black', width: 15, height: 15}}
                />
                </View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 8 : 15</Text></View>
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 60 : 15</Text></View>
            </View>
             
     </View> 


<View style={{ 
        borderWidth: 0, 
        height: 60,
        borderColor: 'E0C491', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 0, borderColor: 'blue', backgroundColor: '#E0C491', height:'100%', padding: 4, marginLeft: 40, borderRadius: 5 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 0, borderColor: 'blue', height:'100%'}}>
                <View style={{height:'50%', justifyContent: 'center' }}>
                <Image 
    source={require('../../assets/images/time_b.png')} 
    style={{ borderWidth: 0, borderColor: 'red', width: 15, height: 15}}
                />
                </View>
                <View style={{height:'50%', justifyContent: 'center' }}>
               
                <Image 
    source={require('../../assets/images/tempo_b.png')} 
    style={{ borderWidth: 0, borderColor: 'black', width: 15, height: 15}}
                />
                </View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 8 : 15</Text></View>
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 60 : 15</Text></View>





            </View>
             
     </View> 


{/* ОТДЫХ */}
<View style={{ 
        borderWidth: 0, 
        height: 30,
        borderColor: 'red', 
        padding: 8,
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 0, borderColor: 'blue', backgroundColor: '#E7E7E7', height:'100%', padding: 4, borderRadius: 5, marginLeft: 20 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 0, borderColor: 'red', height:'100%'}}>
                <View style={{height:'100%', justifyContent: 'center', marginLeft: 10, }}>

                </View>

            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'100%', justifyContent: 'center' }}><Text> Отдых между подходами 3 минуты</Text></View>
               



            </View>
             
     </View> 
{/* КОНЕЦ ОТДЫХ */}

          
      <Text>ЗАМИНКА</Text>
  
    
       <View style={{ 
        borderWidth: 0, 
        height: 60,
        padding: 8,
        borderColor: 'red', 
        flexDirection: 'row', // Это ключевое изменение
        justifyContent: 'flex-start', // Выравнивание по началу (левому краю для LTR)
        alignItems: 'center' // Выравнивание по центру по вертикали
                    }}>

            {/* палочка */}
            <View style={{ borderWidth: 0, borderColor: 'blue', backgroundColor: '#BFBFBF', height:'100%', padding: 4, borderRadius: 5 }}>
                <View></View>
                
            </View>
            
            {/* иконки */}
            <View style={{ borderWidth: 0, borderColor: 'blue', height:'100%'}}>
                <View style={{height:'50%', justifyContent: 'center' }}>
                <Image 
    source={require('../../assets/images/time_b.png')} 
    style={{ borderWidth: 0, borderColor: 'red', width: 15, height: 15}}
                />
                </View>
                <View style={{height:'50%', justifyContent: 'center' }}>
               
                <Image 
    source={require('../../assets/images/tempo_b.png')} 
    style={{ borderWidth: 0, borderColor: 'black', width: 15, height: 15}}
                />
                </View>
            </View>
            
            {/* значения */}
            <View style={{ borderWidth: 0, borderColor: 'black', height: '100%' }}>   
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 8 : 15</Text></View>
                <View style={{height:'50%', justifyContent: 'center' }}><Text> 60 : 15 ВСТАВЛЯЮ  </Text> <CalcRun a={60} b={15} /> </View>
                
            </View>
             
     </View>       

 
    </View>
  );
};


export default WorckOutMain;