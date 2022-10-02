const _blur = document.querySelector('.blur');
const add_note = document.querySelector('.add_note');
const btn = document.querySelector('.btn');
const new_note = document.querySelector('.mdl');
const note_name = document.querySelector('input');
const note = document.querySelector('textarea');
const wrapper = document.querySelector('.wrapper');


_blur.onclick = () => {
    _blur.classList.add('none')
    add_note.classList.add('none')
};

new_note.onclick = () => {
    _blur.classList.remove('none');
    add_note.classList.remove('none');

    setTimeout(() => {
        note_name.value = '';
        note.value = '';
    },200);
}

btn.onclick = () => {
    if(note.value != '' && note_name.value != ''){
        let cr_note = document.createElement('div')
            cr_note.classList.add('note_item');
    
        let cr_p_name = document.createElement('p')
            cr_p_name.classList.add('note_title')
            cr_p_name.textContent = note_name.value;
    
        let cr_p_note = document.createElement('p')
            cr_p_note.classList.add('note')
            cr_p_note.textContent = note.value;
        
        let cr_menu_ic = document.createElement('div')
            cr_menu_ic.classList.add('menu_ic');

        let cr_menu = document.createElement('div')
            cr_menu.classList.add('menu','none');

        let cr_edit = document.createElement('p')
            cr_edit.innerText = "Edit"
        let cr_delete = document.createElement('p')
            cr_delete.innerText = "Delete"

        wrapper.appendChild(cr_note);
        cr_note.append(cr_p_name);
        cr_note.appendChild(cr_p_note);
        cr_note.appendChild(cr_menu_ic)
        cr_note.appendChild(cr_menu)
        cr_menu.appendChild(cr_edit)
        cr_menu.appendChild(cr_delete)

        _blur.classList.add('none');
        add_note.classList.add('none');
    }
}
