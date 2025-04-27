using System;
using Microsoft.AspNetCore.Mvc;
using WorkflowPOC.Modals.Request;
using WorkflowPOC.Modals.Tasks;
using WorkflowPOC.Modals.Factories;
using WorkflowPOC.Modals;

namespace WorkflowPOC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        // GET api/task/execute/{taskType}/{arg}
        [HttpGet("execute/{taskType}/{arg}")]
        public IActionResult ExecuteTask(string taskType, string arg)
        {
            try
            {
                BaseTask task = BaseTaskFactory.createTask(taskType);
                return Ok(task.executeTask(arg));
            }
            catch (Exception ex)
            {
                return BadRequest($"Error executing task: {ex.Message}");
            }
        }
    }
}

