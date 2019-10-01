const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');

spacing.addEventListener('change', function(e) {
  let spacingValue = e.target.value;
  
  document.documentElement.style.setProperty('--spacing', `${spacingValue}px`);
});

blur.addEventListener('change', function(e) {
  let blurValue = e.target.value;
  
  document.documentElement.style.setProperty('--blur', `${blurValue}px`);
});

base.addEventListener('change', function(e) {
  let colorValue = e.target.value;
  
  document.documentElement.style.setProperty('--base', `${colorValue}`);
});