using System;
using WorkflowPOC.Modals.Request;
using WorkflowPOC.Modals.Tasks;
namespace WorkflowPOC.Modals.Factories
{
	public static class BaseTaskFactory
	{

		public static BaseTask createTask(string type)
		{
			switch (type)
			{
				case "human": return new HumanTask();
				default: return null;
			}
		}
	}
}

