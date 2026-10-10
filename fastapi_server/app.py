from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    stuname:str
    studept:str
    stuusername:str 
    stupassword:str
    stuage:int  
    stumark:float

app = FastAPI()
@app.get("/getStudents")
def get_Students():
    return "Get students method called"
#localhost:8000/getStudents
@app.post("/addStudent")
def add_Student(stu:Student):
    return {"student_details": stu}
#try to more routes
@app.put("/updateStudent")
def update_Student():
    return "Update student method called"   
@app.delete("/deleteStudent")
def delete_Student():       
    return "Delete student method called"
@app.get("/getParticularStudent/:{id}")
def get_ParticularStudent(id: int):
    return {"user_id":id}
#localhost:8000/filterdept?dept=CS&mark=80
@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return{"dept":dept,"mark":mark}