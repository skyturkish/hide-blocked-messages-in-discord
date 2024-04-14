setInterval(() => {
  document.querySelectorAll('.groupStart__7b93c').forEach((element) => {
    const blockedMessageElement = element.querySelector('.blockedSystemMessage_d1b25e.container__2acd5.cozy_d67381')
    if (blockedMessageElement && element.style.display !== 'none') {
      element.style.display = 'none'
    }
  })
}, 250)
