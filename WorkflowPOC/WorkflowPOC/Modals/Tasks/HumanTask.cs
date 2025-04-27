using System;
using WorkflowPOC.Modals.Request;
namespace WorkflowPOC.Modals.Tasks
{
	public class HumanTask : BaseTask
	{
		public HumanTask()
		{
		}

        public override Task<bool> createTask(object a)
        {
            if(!(a is CreateHumanTaskRequest))
            {
                // show argument error
                Console.WriteLine("Not Implemented");
            }
            /*
             * Things to do:
             * Create an entry in database.
             * */
            throw new NotImplementedException();
        }

        public override Task<bool> executeTask(object a)
        {
            throw new NotImplementedException();
        }
    }
}

