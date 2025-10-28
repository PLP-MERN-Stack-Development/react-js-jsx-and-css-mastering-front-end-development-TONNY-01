import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardBody } from '../components/Card';
import Button from '../components/Button';
import TaskManager from '../components/TaskManager';

const Tasks = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <Button 
          variant="primary" 
          onClick={() => navigate('/tasks/new')}
        >
          Add New Task
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Your Tasks</CardTitle>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setShowCompleted(!showCompleted)}
            >
              {showCompleted ? 'Hide Completed' : 'Show Completed'}
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <TaskManager showCompleted={showCompleted} />
        </CardBody>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Task Statistics</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300">Total Tasks</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300">Completed</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300">In Progress</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardBody className="space-y-3">
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => {}}
            >
              Mark All Complete
            </Button>
            <Button 
              variant="danger" 
              className="w-full"
              onClick={() => {}}
            >
              Clear Completed
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Tasks;
