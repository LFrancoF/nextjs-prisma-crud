//import {prisma} from '@/libs/prisma';
import TaskCard from '@/components/TaskCard';

async function loadTasks(){
  const res = await fetch('http://localhost:3000/api/tasks',{cache: 'no-store'}); //en esta peticion le decimos que no almacene estos datos en cache, por problemas al actualizar con router.refresh() desde un client component
  const data = await res.json();
  //const data = await prisma.task.findMany();
  return data;
}

async function HomePage(){
  const tasks = await loadTasks();
  
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3'>
        {
          tasks.map(task => (
            <TaskCard task={task} key={task.id}/>
          ))
        }
      </div>
    </section>
  )
}

export default HomePage;